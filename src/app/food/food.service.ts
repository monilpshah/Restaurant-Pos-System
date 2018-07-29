import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private dish:string='http://localhost:3000/dish/';
  private cuisine:string='http://localhost:3000/cuisine/';
  private dishcuisine:string='http://localhost:3000/dishcuisine/';

  constructor(private _http:HttpClient) { }

  getdishbyid(did){
    return this._http.get(this.dish+did);
  }
  getalldish(){
    return this._http.get(this.dish);
  }
  getallcuisine(){
    return this._http.get(this.cuisine);
  }
  getcuisinebyid(cid){
    return this._http.get(this.cuisine+cid);
  }
  getdishcuisine(cname){
    return this._http.get(this.dishcuisine+cname);
  }
  deletedish(did){
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.dish+did,{headers:head1});
  }

}
