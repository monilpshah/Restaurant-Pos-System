import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { admin } from './admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CustomerId:string;
  Password:string;
  flag=0;
  parr:string[]=[];
  constructor(private _route:Router,private _loginservice:LoginService,private _admin:AdminService) { }

  ngOnInit() {

  }

  login(){
    this._loginservice.login(new login(this.CustomerId,this.Password)).subscribe(
      (data:any)=>{
        if(data.length==1)
        {
        localStorage.setItem('userId',this.CustomerId);
        alert("Login success");
        this.flag=1;
        this._route.navigate(['/food']);
        }
        else if(this.flag==0){
                      this._admin.adminlogin(new admin(this.CustomerId,this.Password)).subscribe(
                        (data:any)=>{
                          if(data.length==1){
                                  localStorage.setItem('adminid',this.CustomerId);
                                  alert("ADMIN success");

                                  this._route.navigate(['/food']);
                          }
                          else
                          {
                              console.log("wrong");
                              alert("Username or Password mismatch");
                            }
                        }
                      );
        }


      }
    );

  }

  cancel(){
    this.CustomerId="";
    this.Password="";
  }
  onforgetpassword(){
    this._route.navigate(['forgetpassword']);
  }
}
