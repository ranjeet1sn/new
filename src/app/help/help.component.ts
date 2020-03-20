import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  helpForm:FormGroup
  constructor(private dialog:MatDialog,private service:AuthService,private toastservice:ToastrService) { }
  ngOnInit() {
    this.helpForm=new FormGroup({
      'name':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'subject':new FormControl(null,[Validators.required]),
      'description':new FormControl(null,[Validators.required]),
      'no':new FormControl(null,[Validators.required])
    })
  }
  close(){
   this.dialog.closeAll()
  }
  onSubmit(){
    console.log(this.helpForm.value)
    this.service.helpFormInsert(this.helpForm.value).subscribe(
      (res)=>{
        console.log(res)

      }
    )
    this.dialog.closeAll()
    this.toastservice.success('Thanks For Your FeedBack')
  }
  resetForm(){
    this.helpForm.reset()
  }
}
