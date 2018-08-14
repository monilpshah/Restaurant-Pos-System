import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headerlogin',
  templateUrl: './headerlogin.component.html',
  styleUrls: ['./headerlogin.component.css']
})
export class HeaderloginComponent implements OnInit {


  constructor(private _route:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    }
    onclickLogin(){
      this._route.navigate(['']);
    }

    onclicksignup(){
      this._route.navigate(['signup']);
    }
    onclickforgetpassword(){
      this._route.navigate(['forgetpassword']);
    }
    onclickhome(){
      this._route.navigate(['viewproduct']);
    }
    onclickeditprofile(){
      this._route.navigate(['eidtprofile']);
    }
    onclickviewprofile(){
      this._route.navigate(['viewprofile']);
    }
}
