import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmincuisineService {

  private cuisine:string='http://localhost:3000/cuisine/';
  constructor(private _http:HttpClient) { }
  addcuisine(cname){
    let body=JSON.stringify(cname);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cuisine,body,{headers:head1});
  }
}
