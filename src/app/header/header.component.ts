import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../shared/auth.service';
import * as jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  @Output() condition = new EventEmitter()
  static bind;
  cond = false;
  cond2 = true
  constructor(private dialog: MatDialog, private service: AuthService, private router: Router) {
    HeaderComponent.bind = this
  }
  ngOnInit() {
    this.cond = false
    this.cond2 = true
    var token = localStorage.getItem('token')
    if (token) {
      this.cond = true
      this.cond2 = false
    }
  }
  chk() {
    this.dialog.closeAll()
    this.dialog.open(RegisterComponent)
  }
  chk2() {
    this.dialog.closeAll()
    this.dialog.open(LoginComponent)
  }
  logout() {
    this.service.deleteToken()
    this.router.navigate(['/home'])
    this.cond2 = true
    this.cond = false
  }
}
