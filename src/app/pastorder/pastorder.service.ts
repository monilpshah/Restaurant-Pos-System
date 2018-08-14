import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastorderService {

  private pastorder:string='http://localhost:3000/pastorder/';

  constructor(private _http:HttpClient) { }

  getbillbyid(userid){
    return this._http.get(this.pastorder+userid);
  }
}
