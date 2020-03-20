import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import * as jwt_decode from 'jwt-decode'
import { MatDialog } from '@angular/material';
import { AddroomComponent } from './addroom/addroom.component';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OwnerComponent implements OnInit {
name;
email:string
  constructor(private service:AuthService,private router:Router,private dialog:MatDialog) { }
  ngOnInit() {
var token= localStorage.getItem('token')
  token=jwt_decode(token)
  console.log(token)
  this.name=token['name']
  this.email=token['email']
  }
  logout(){
   localStorage.clear()
   HeaderComponent.bind.ngOnInit()
   this.router.navigate(['/home'])
   AppComponent.load.ngOnInit()
  }
}
