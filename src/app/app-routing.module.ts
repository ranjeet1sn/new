import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OwnerComponent } from './owner/owner.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AuthGuard } from './shared/auth.guard';
import { AddroomComponent } from './owner/addroom/addroom.component';
import { ViewroomComponent } from './owner/viewroom/viewroom.component';
import { RoomdetailComponent } from './buyer/roomdetail/roomdetail.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'owner',component:OwnerComponent,children:[{
    path:'addroom',component:AddroomComponent
  },
  {
    path:'viewroom',component:ViewroomComponent
  },
]},
  {path:'buyer',component:BuyerComponent,children:[
    {path:'details/:id',component:RoomdetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
