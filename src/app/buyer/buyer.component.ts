import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { state, animate, transition, style, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../action/action.action'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
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
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({
          transform: 'translateY(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class BuyerComponent implements OnInit {
data=[]
src=[];
myControl = new FormControl();
states;
@ViewChild('value',{static:false})local:ElementRef
  constructor(private store: Store<AppState>,private service:AuthService,private sanitizer:DomSanitizer,private router:Router) {
   }
  ngOnInit() {
    this.getData()
  }
getData(){
  this.service.getValue().subscribe(
    (res:any)=>{
      for(let ele of res){
        let mySrc = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + ele.image)
        this.src.push(mySrc)
      }
      this.store.dispatch(new TutorialActions.SaveTutorial(res))
      this.data=res    }
  )
}

redirect(id){
  console.log(id)
  this.router.navigate([`/buyer/details/${id}`])
}
value(data){
  console.log(data)
  this.service.getroomByLocation(data).subscribe(
    (res:any)=>{
      console.log(res)
      this.data=res
    },
    (err)=>[
      console.log(err)
    ]
  )
}
onDrop(event:CdkDragDrop<string[]>){
  if(event.previousContainer==event.container){
    moveItemInArray(event.container.data,event.previousIndex,event.currentIndex)
  }
else{
  transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
}
}
select(value){
console.log(value)
}
}
