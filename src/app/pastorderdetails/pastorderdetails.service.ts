import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastorderdetailsService {

  private pastorderdetails:string='http://localhost:3000/pastorderdetails/';

  constructor(private _http:HttpClient) { }

  getbilldetailsbybillid(billid){
    return this._http.get(this.pastorderdetails+billid);
  }
}
