import { Routes,RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';
import { LoginComponent } from './login/login.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AdmincuisineComponent } from './admincuisine/admincuisine.component';
const arr:Routes=[
  {path:'food',component:FoodComponent},
  {path:'pastorder/:userid',component:PastorderComponent},
  {path:'',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'pastorderdetails/:billid',component:PastorderdetailsComponent},
  {path:'signup',component:SignuppageComponent},
  {path:'admincuisine',component:AdmincuisineComponent}
];

export const routing=RouterModule.forRoot(arr);
