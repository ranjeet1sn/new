import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import {NgbCarouselModule,NgbAlertModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwnerComponent } from './owner/owner.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { AddroomComponent } from './owner/addroom/addroom.component';
import { ViewroomComponent } from './owner/viewroom/viewroom.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { EditRoomComponent } from './owner/edit-room/edit-room.component';
import { HelpComponent } from './help/help.component';
import {ToastrModule} from 'ngx-toastr';
import { ImageDilaogComponent } from './owner/image-dilaog/image-dilaog.component';
import { RoomdetailComponent } from './buyer/roomdetail/roomdetail.component'
import { StoreModule } from '@ngrx/store';
import {reducer} from '../app/reducer/action.reducer';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {AgmCoreModule} from '@agm/core'
import { MatDatepickerModule } from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import { ReviewComponent } from './buyer/review/review.component';
import {NgxStripeModule} from 'ngx-stripe';
import { PaymentDoneComponent } from './buyer/payment-done/payment-done.component'
import { BarRatingModule } from "ngx-bar-rating";
 import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OwnerComponent,
    BuyerComponent,
    AddroomComponent,
    ViewroomComponent,
    EditRoomComponent,
    HelpComponent,
    ImageDilaogComponent,
    RoomdetailComponent,
    ReviewComponent,
    PaymentDoneComponent,
  ],
  imports: [
    BrowserModule,
    NgxStripeModule.forRoot('pk_test_MiKaabTqQaYAj5GIruO5ODtv00bB2Gwvhn'  ),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    HttpClientModule,
    MaterialFileInputModule,
    MatFileUploadModule,
    DragDropModule,
    BarRatingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDfIncfw9TPiFRGw30IyX_T5tNAyLsh0Rg',
      libraries: ['places']
    }),
    StoreModule.forRoot({
      tutorial:reducer
   }),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  entryComponents:[LoginComponent,RegisterComponent,EditRoomComponent,HelpComponent,ImageDilaogComponent,ReviewComponent,PaymentDoneComponent],
  providers:[AuthService,AuthGuard,ImageDilaogComponent,ViewroomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
