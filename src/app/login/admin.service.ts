import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url:string='http://localhost:3000/admin/';
  constructor(private _http:HttpClient) { }
  adminlogin(item:admin){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
