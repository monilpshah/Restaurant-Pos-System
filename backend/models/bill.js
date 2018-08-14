var db=require('../dbconnection'); //reference of dbconnection.js

var bill={

  addbill:function(item,callback){
      // console.log(item);
      // console.log(item.bill);
      // console.log(item.userid);
      console.log(item);
      var date=new Date();
      return db.query("insert into bill_tbl (userid, bill,date) values (?,?,?)",[item.userid,item.total,date],callback);
  },
  getbill:function(callback){
    return db.query("select * from bill_tbl",callback);
  },
  getbillbyid:function(userid,callback){
    return db.query("select * from bill_tbl where userid=?",[userid],callback);
  }

}
module.exports=bill;
