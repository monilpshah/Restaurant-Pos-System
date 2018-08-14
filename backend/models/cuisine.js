var db=require('../dbconnection'); //reference of dbconnection.js

var cuisine={

  getallcuisine:function(callback){
    return db.query("select * from cuisine",callback);
  },
  getcuisinebyid:function(cid,callback){
    return db.query("select * from cuisine where cid=?",[cid],callback);
  },
  addcuisine:function(cname,callback){
    return db.query("insert into cuisine (cname) values (?)",[cname],callback);
  }

}
module.exports=cuisine;
