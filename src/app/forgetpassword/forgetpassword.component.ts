import { Component, OnInit } from '@angular/core';
import { ForgetpasswordService } from './forgetpassword.service';
import { Router, ActivatedRoute } from '@angular/router';
import { forget } from './forget';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  CustomerId: string;
   Name: string;
   Password:string;
   ConfirmPassword:string;
   Age:number;
   MobileNumber: string;
   Gender:string;
   City: string;
   Address:string;
   newPassword:string;
   flag:boolean=false;
  confirmPassword:string;
  arr:forget[]=[];

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _forget:ForgetpasswordService) { }

  ngOnInit() {
    this.CustomerId=localStorage.getItem('userId');
    // console.log(this.CustomerId);
  }

  onforget(){
    this.arr.push(new forget(this.CustomerId,this.newPassword));
    this._forget.getCustomerById(this.CustomerId).subscribe(
      (data:any)=>
      {
        if(data.length==1)
        {

          this._forget.forgetPassword(this.arr).subscribe(
            (data:any)=>{

              // this.Password=data[0].Password;
              console.log(this.Password);
            }
          );
          alert("Password changed successfully");
          this._route.navigate(['']);
        }
       else
       {
         alert("please enter correct email");
       }

      }
    );
  }
  cancel(){
    this.CustomerId="";
    this.newPassword="";
    this.confirmPassword="";
  }

}
