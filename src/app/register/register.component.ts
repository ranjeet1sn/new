import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Route } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup
  constructor(private service:AuthService,private dialog:MatDialog) { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      'name':new FormControl(null),
      'password':new FormControl(null),
      'role':new FormControl(null),
      'email':new FormControl(null)
    })
  }
  onSubmit(){

 this.service.addUser(this.registerForm.value).subscribe(
   (res)=>{
     console.log(res)
     this.dialog.closeAll()
   }
 )
  }
}
