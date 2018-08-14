import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private bill:string='http://localhost:3000/bill/';
  private bill_details:string='http://localhost:3000/billdetails/';
  constructor(private _http:HttpClient) { }

  getbillbyid(userid){
    return this._http.get(this.bill+userid);
  }
  addbill(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill,body,{headers:head1});
  }
  addbilldetail(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.bill_details,body,{headers:head1});
  }

}
