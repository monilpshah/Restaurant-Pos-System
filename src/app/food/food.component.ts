import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { dish } from './dish';
import { cuisine } from './cuisine';
import { BillService } from './bill.service';
import { bill_tbl } from './bill_tbl';
import { bill_details } from './bill_detail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  cid:number;
  cname:string;
   did:number;
   dname:string;
   dprice:number;
   dimg:string;
   fkcid:number;
  cuisinearr:cuisine[]=[];
  disharr:dish[]=[];
  orderarr:dish[]=[];
  qty:number[]=[];
  sum:number[]=[];
  total:number=0;
  i:number;
  userid:string;
  bill_tblarr:bill_details[]=[];

  onefif:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  constructor( private _foodservice:FoodService,private _bill:BillService,private _route:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.userid=localStorage.getItem('userId');
    this._foodservice.getalldish().subscribe(
      (data:any)=>{
        this.disharr=data;
      }
    );


    this._foodservice.getallcuisine().subscribe(
      (data:cuisine[])=>{
          this.cuisinearr=data;
      }
    );
  }

  onclicklogout(){
    localStorage.clear();
    this._route.navigate(['']);
  }


  onclickmenu(cuisinename){
    this._foodservice.getdishcuisine(cuisinename).subscribe(
      (data:dish[])=>{
        this.disharr=data;
      }
    );
  }
  onclickhome(){
    this._foodservice.getalldish().subscribe(
      (data:dish[])=>{
        this.disharr=data;
      }
    );
  }

  onclickfood(item){

      if(this.orderarr.find(x=>x.dname==item.dname)){
       alert("item already added.. please add quantity");
      }
      else{
        this.orderarr.push(new dish(item.did,item.dname,item.dprice,item.dimg,item.fkcid));
        this.qty.push(1);
        this.total=this.total+item.dprice;
        this.sum.push(item.dprice);}
  }
  onclickpastorder(){
    this._route.navigate(['/pastorder',this.userid]);
  }


  onDelete(item,i){
    this.orderarr.splice(this.orderarr.indexOf(item), 1);
    this.total=this.total-this.sum[i];
    this.sum.splice(i,1);
    this.qty.splice(i,1);
    }
  onchange(item,i){
    if(this.qty[i]<1){
      this.qty[i]=1;
      alert("qty can't be zero");
    }
    else{
      this.total=this.total-this.sum[i];
    this.sum[i]=this.qty[i]*item.dprice;
    this.total=this.total+this.sum[i];
    }
  }
  oncheckout(){

    this._bill.addbill(new bill_tbl(this.userid,this.total)).subscribe(
      (data:any)=>{
        alert("Congratulations...Your order is booked.")
        this._route.navigate(['/pastorder',this.userid]);

        for(this.i=0;this.i<this.sum.length;this.i++)
      {
        this.bill_tblarr.push(new bill_details(this.qty[this.i],this.sum[this.i],this.orderarr[this.i].did,data.insertId));
      }
      this._bill.addbilldetail(this.bill_tblarr).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );

      }
    );

  }

}
