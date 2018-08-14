import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  private url:string='http://localhost:3000/forgetpassword/';
  constructor(private _http:HttpClient) { }

  forgetPassword(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.CustomerId,body,{headers:head1});
  }
  getCustomerById(CustomerId){
    return this._http.get(this.url+CustomerId);
  }


}
