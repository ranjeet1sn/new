import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-image-dilaog',
  templateUrl: './image-dilaog.component.html',
  styleUrls: ['./image-dilaog.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ImageDilaogComponent implements OnInit {
  static path;
  constructor(private injector:Injector,private dialog:MatDialog) { }
  ngOnInit() {

  }
  getValue(path:string){
   ImageDilaogComponent.path=path
  }
value(){
  return ImageDilaogComponent.path
}
closedialog(){
  this.dialog.closeAll()
}
}
