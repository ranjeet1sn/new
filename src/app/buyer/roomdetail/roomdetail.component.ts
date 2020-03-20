import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Room } from 'src/app/owner/owner.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions} from 'ngx-stripe';
import { HttpClient } from '@angular/common/http';
import { PaymentDoneComponent } from '../payment-done/payment-done.component';
import { Detail } from '../buyer.model';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css'],
   encapsulation:ViewEncapsulation.None
})
export class RoomdetailComponent implements OnInit,AfterViewInit {
  latitude=24.5854
  longitude=73.7125
  id;
  price=0;
  completed=false
  description: any;
  hide=true
  month;
  date:Date;
  disabled=true
  elements: Elements;
  card: StripeElement;
  key;
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
  form:FormGroup
  submitForm:FormGroup
  constructor(private service:AuthService,private http:HttpClient, private stripeService: StripeService,private store: Store<AppState>,private dialog:MatDialog,private active:ActivatedRoute) { }
  product=[]
  ngOnInit() {
   this.form=new FormGroup({
     'price':new FormControl({value:'',disabled:this.disabled}),
     'name':new FormControl()
   })
   this.submitForm=new FormGroup({
     'name':new FormControl(null),
     'mobile':new FormControl(null),
     'email':new FormControl(null),
     'id':new FormControl(null),
     'idtype':new FormControl(null)
   })
    this.active.params.subscribe(
      (params:Params)=>{
       this.id=params['id']
       console.log(this.id)
      }

    )
    this.store.select('tutorial').subscribe(
      (res:any) =>{
       this.product=res[0]
    console.log(res)
       for(let ele of this.product){
         if(this.id==ele.id){
          this.description=ele.description
          this.price=ele.price
          console.log(this.price)
         }
       }
        }
    )
  }
  ngAfterViewInit(){
    this.stripeService.elements(this.elementsOptions)
    .subscribe(elements => {
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
            base: {
              iconColor: '#666EE8',
              color: '#31325F',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: '18px',
              '::placeholder': {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }
  buy() {
    const name = this.form.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(obj => {
        if (obj) {

    console.log('token is',obj);
        }
        this.http.post('/api/payemnt',{
          token:obj.token.id,
          amount:this.price*100
        }).subscribe((res)=>{
          console.log(res)
          this.dialog.open(PaymentDoneComponent)
         this.form.reset()
         this.card.clear()
          this.price=0;
        },
        (err)=>console.log(err)
        )
      }
      );
        }
  onLocation(event:any){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng
  }
  dialogopen(){
    console.log('ss')
    this.dialog.open(ReviewComponent)
  }
  unhide(){
    this.hide=false
  }
  onSubmit(){
    console.log(this.submitForm.value)
    console.log(this.month,this.date)
    const data=new Detail(
      this.submitForm.value.name,
      this.submitForm.value.email,
      this.submitForm.value.mobile,
      this.submitForm.value.idtype,
      this.submitForm.value.id,
      this.date,
      this.month,
    )
    console.log(data)
    this.service.userDetail(data).subscribe(
      (res)=>{
        console.log(res)
        this.submitForm.reset()
        this.month=0;
        this.date;
      }
    )
  }

}
