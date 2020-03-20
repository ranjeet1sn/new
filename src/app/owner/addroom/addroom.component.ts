import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup,FormControl } from '@angular/forms';
import { Room } from '../owner.model';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class AddroomComponent implements OnInit {
  imgsrc: string
  addproduct:FormGroup
  selectedImage: any = null
  base64textString: string
  constructor(private dialog:MatDialog,private service:AuthService,private router:Router) { }
  ngOnInit() {
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
      this.imgsrc ;
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
    console.log(btoa(binaryString));
  }
  close(){
    this.dialog.closeAll()
  }
onSubmit(){
  const data=new Room(
    this.addproduct.value.location,
    this.addproduct.value.price,
    this.addproduct.value.description,
    this.addproduct.value.no,
    this.base64textString
  )
 this.service.insertValue(data).subscribe(
   (res)=>{console.log(res)
     this.dialog.closeAll()
     this.router.navigate(['/owner/viewroom'])

  }
 )
}
}

