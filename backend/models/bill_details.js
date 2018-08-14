var db=require('../dbconnection'); //reference of dbconnection.js

var bill_details={

  addbill_details:function(item,callback){
    var value=[];
    for(let i=0;i<item.length;i++){
      value[i]=[item[i].qty,item[i].price,item[i].fk_did,item[i].fk_billid];
    }
        return db.query("insert into bill_details (qty,price,fk_did,fk_billid) values ?",[value],callback);
  },
  getbill_details:function(callback){
    return db.query("select * from bill_details",callback);
  }
}
module.exports=bill_details;
