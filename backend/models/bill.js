var db=require('../dbconnection'); //reference of dbconnection.js

var bill={

  addbill:function(item,callback){
      return db.query("Insert into bill_tbl values (?,?,?,?)",[,item.userid,item.bill,],callback);
  }

}
module.exports=bill;
