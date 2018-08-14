var db=require('../dbconnection'); //reference of dbconnection.js

var pastorder={

  getpastorderbyid:function(userid,callback){
    return db.query("select * from bill_tbl where userid=?",[userid],callback);
  },
  getpastorder:function(callback){
    return db.query("select * from bill_tbl",callback);
  }
}
module.exports=pastorder;
