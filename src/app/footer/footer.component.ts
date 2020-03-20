import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    this.dialog.open(HelpComponent)
  }
}
