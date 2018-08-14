import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PastorderService } from './pastorder.service';
import { pastorderClass } from './pastorderClass';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";



@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  constructor(private _route:Router,private _acroute:ActivatedRoute,private _pastorderService:PastorderService) { }
  arr:pastorderClass[]=[];
  userid:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.userid=this._acroute.snapshot.params['userid'];
    this._pastorderService.getbillbyid(this.userid).subscribe(
      (data:any)=>{
        this.arr=data;
        this.dataSource.data = this.arr;
      }
    );
  }

  //table add angular material
  // ELEMENT_DATA: Tasks[] = [];

  // ELEMENT_DATA: Tasks[] = this.arr;
  displayedColumns: string[] = ["Date", "Total Bill", "Details"];
  dataSource = new MatTableDataSource(this.arr);

  onviewdetails(item){
    this._route.navigate(['/pastorderdetails',item.billid]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onclickback(){
    this._route.navigate(['/food']);
  }

}
