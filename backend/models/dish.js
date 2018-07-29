var db=require('../dbconnection'); //reference of dbconnection.js

var dish={

  getalldish:function(callback){
    return db.query("select * from dish",callback);
  },
  getdishById:function(did,callback){
    return db.query("select * from dish where did=?",[did],callback);
  },
  getdishcuisine:function(cname,callback){
    return db.query("select c.*,d.* from dish d,cuisine c  where c.cid=d.fkcid AND c.cname=?",[cname],callback);
  },
  deletedishbyid:function(did,callback){
    return db.query("delete from dish where did=? ",[did],callback);
  }

}
module.exports=dish;
