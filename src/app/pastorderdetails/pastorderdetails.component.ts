import { PastorderdetailsService } from './pastorderdetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pastorderdetailsClass } from './pastorderdetailsClass';
import {  MatSort, MatPaginator, MatTableDataSource } from '@angular/material' ;

@Component({
  selector: 'app-pastorderdetails',
  templateUrl: './pastorderdetails.component.html',
  styleUrls: ['./pastorderdetails.component.css']
})
export class PastorderdetailsComponent implements OnInit {

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _pastorderdetailsService:PastorderdetailsService) { }
  arr:pastorderdetailsClass[]=[];
  billid:number;
  userId:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.userId=localStorage.getItem('userId');
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.billid=this._acroute.snapshot.params['billid'];
    this._pastorderdetailsService.getbilldetailsbybillid(this.billid).subscribe(
      (data:any)=>{
        this.arr=data;
        this.dataSource.data = this.arr;
      }
    );
  }
  onclickback(){
    this._route.navigate(['/pastorder',this.userId]);
  }


  displayedColumns: string[] = ["dname", "dprice", "dimage"];
  dataSource = new MatTableDataSource(this.arr);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
