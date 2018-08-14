import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule,MatInputModule,MatSortModule, MatCardModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { routing } from './app.routing';
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';
import { LoginComponent } from './login/login.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HeaderloginComponent } from './headerlogin/headerlogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AdmincuisineComponent } from './admincuisine/admincuisine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    PastorderComponent,
    PastorderdetailsComponent,
    LoginComponent,
    SignuppageComponent,
    HeaderloginComponent,
    ForgetpasswordComponent,
    AdmincuisineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
     MatCardModule,
     MatTableModule,
     MatPaginatorModule,
     BrowserAnimationsModule,
     MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
