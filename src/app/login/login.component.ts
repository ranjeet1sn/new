import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as jwt_decode from 'jwt-decode'
import { AuthService } from '../shared/auth.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  @Output() condition = new EventEmitter()
  constructor(private service: AuthService, private dialog: MatDialog, private route: Router,private injector:Injector) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    })
  }
  onSubmit() {
    this.service.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res)
        this.service.setToken(res['token'])
        var decoded = jwt_decode(res['token']);
          AppComponent.load.ngOnInit()
          HeaderComponent.bind.ngOnInit()
        if (decoded.role == 'owner') {
          this.route.navigate(['/owner'])
        }
        else {
          this.route.navigate(['/buyer'])
        }
        this.dialog.closeAll()
      }
    )
  }
}
