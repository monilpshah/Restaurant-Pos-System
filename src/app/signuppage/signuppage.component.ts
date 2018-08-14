import { Component, OnInit } from '@angular/core';
import { signup } from './signup';
import { Router } from '@angular/router';
import { SignupsService } from './signups.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  CustomerId: string;
   Name: string;
   Password:string;
   ConfirmPassword:string;
   Age:number;
   MobileNumber: string;
   Gender:string="Male";
   City: string;
   Address:string;
   arr:signup[]=[];

  constructor(private _route:Router,private _signup:SignupsService) { }

  ngOnInit() {
  }

  add(){
    this._signup.add(new signup(this.CustomerId,this.Name,this.Password,this.ConfirmPassword,this.Age,this.MobileNumber,this.Gender,this.City,this.Address)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.push(new signup(this.CustomerId,this.Name,this.Password,this.ConfirmPassword,this.Age,this.MobileNumber,this.Gender,this.City,this.Address));
      }
    );
    alert("Suucessfully added.");
    this._route.navigate(['login']);
  }

  cancel(){
    this.CustomerId="";
    this.Name="";
    this.Password="";
    this.ConfirmPassword="";
    this.Age=0;
    this.MobileNumber="";
    this.Gender="";
    this.City="";
    this.Address="";
  }


}
