import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatSort, MatPaginator, MatTableDataSource } from '@angular/material' ;
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food/food.service';
import { cuisine } from '../food/cuisine';
import { AdmincuisineService } from './admincuisine.service';
import { admincuisine } from './admincuisine';

@Component({
  selector: 'app-admincuisine',
  templateUrl: './admincuisine.component.html',
  styleUrls: ['./admincuisine.component.css']
})
export class AdmincuisineComponent implements OnInit {

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _cuisine:FoodService,private _admincuisine:AdmincuisineService) { }
  flag:boolean=false;
  arr:cuisine[]=[];
  cname:string;
  parr:admincuisine[]=[];
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._cuisine.getallcuisine().subscribe(
      (data:any)=>{
        this.arr=data;
        this.dataSource.data = this.arr;
      }
    );
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ["Id", "Name"];
  dataSource = new MatTableDataSource(this.arr);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onvisible(){
    if(this.flag){
      this.flag=false;
    }
    else if(this.flag==false){
      this.flag=true;
    }
  }

  onAdd(){

    this._admincuisine.addcuisine(this.cname).subscribe(
      (data:any)=>{
        this.parr.push(new admincuisine(this.cname));
        console.log(data);
      }
    );

  }
}
