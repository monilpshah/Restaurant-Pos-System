var db=require('../dbconnection'); //reference of dbconnection.js

var cuisine={

  getallcuisine:function(callback){
    return db.query("select * from cuisine",callback);
  },
  getcuisinebyid:function(cid,callback){
    return db.query("select * from cuisine where cid=?",[cid],callback);
  },

}
module.exports=cuisine;
