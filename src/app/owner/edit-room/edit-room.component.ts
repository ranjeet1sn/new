import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { Room } from '../owner.model';
import { MatDialog } from '@angular/material';
import { ViewroomComponent } from '../viewroom/viewroom.component';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EditRoomComponent implements OnInit {
  imgsrc: string
  addproduct: FormGroup
  selectedImage: any = null
  base64textString: string
  data: Room;
  id: string;
  no: string;
  price: number;
  location: string;
  description: string
  constructor(private service: AuthService, private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.data = this.service.returndata();
    this.no = this.data.no;
    this.price = this.data.price;
    this.location = this.data.location;
    this.description = this.data.description
    this.id = this.service.getById()
    this.addproduct = new FormGroup({
      'no': new FormControl(null),
      'price': new FormControl(null),
      'location': new FormControl(null),
      'description': new FormControl(null),
      'image': new FormControl(null),
    })
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgsrc = e.target.result;
      let data = reader.readAsDataURL(event.target.files[0])
      console.log(data)
      this.selectedImage = event.target.files[0]
    }
    else {
      this.imgsrc;
      this.selectedImage = null
    }
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
  onSubmit() {
    const data = new Room(
      this.addproduct.value.location,
      this.addproduct.value.price,
      this.addproduct.value.description,
      this.addproduct.value.no,
      this.base64textString
    )
    this.service.udpateRoom(data, this.id).subscribe(
      (res) => {
        ViewroomComponent.reload.ngOnInit()
        this.dialog.closeAll()
      }
    )
  }
  close(){
    this.dialog.closeAll()
   }
}
