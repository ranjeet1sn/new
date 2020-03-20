import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ReviewComponent implements OnInit {
value1;
value2;
value3;

  constructor(private dialog:MatDialog) { }

  ngOnInit() {

  }
onRate(event:any){
  console.log(event.newValue)
  this.value1=event.newValue
}
onRate2(event:any){
  console.log(event.newValue)
  this.value2=event.newValue
}
onRate3(event:any){
  console.log(event.newValue)
  this.value3=event.newValue
}
close(){
  console.log('ss')
  this.dialog.closeAll()
}
}
