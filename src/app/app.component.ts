import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AuthService } from './shared/auth.service';
import * as jwt from 'jwt-decode'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cond;
  static load;
  constructor(location: PlatformLocation, private service: AuthService) {
    AppComponent.load=this
  }
  ngOnInit() {
  var token=  this.service.getToken()
  var tok=jwt(token)
 if(tok.role=='owner'){
   this.cond=true
 }

  }
}

