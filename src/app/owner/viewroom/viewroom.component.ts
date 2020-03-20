import { Component, OnInit, Injector } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { EditRoomComponent } from '../edit-room/edit-room.component';
import { Room } from '../owner.model';
import { ImageDilaogComponent } from '../image-dilaog/image-dilaog.component';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrls: ['./viewroom.component.css'],
  animations: [

    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]

})
export class ViewroomComponent implements OnInit {
  displayedColumns: string[] = [  'price',   'description', 'image', 'no', 'location','delete','edit']
  dataSource;
  src = []
 static  reload;
  constructor(private service:AuthService,private sanitizer:DomSanitizer,private dialog:MatDialog,private injector:Injector) {
    ViewroomComponent.reload=this
  }
  ngOnInit() {
  this.getData()
  }
getData(){
  this.service.getValue().subscribe(
    (res:any)=>{
      for( let ele of res){
        console.log(ele.image)
         let mySrc = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + ele.image)
         this.src.push(mySrc)
      }
      console.log(res)
      this.dataSource=res;
    }
  )
}
onDelete(id){
  this.service.deleteValue(id).subscribe(
    (res)=>{
      console.log(res);
      this.getData()
    }
  )
}
onEdit(data:Room,id:string){
    this.dialog.open(EditRoomComponent)
    this.service.sendValue(data,id)
}
dialogopen(i) {
  this.dialog.open(ImageDilaogComponent, {
  })
  let a = this.injector.get(ImageDilaogComponent)
  console.log(this.src[i])
 a.getValue(this.src[i])
}
}
