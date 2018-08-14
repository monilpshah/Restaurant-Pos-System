var db=require('../dbconnection'); //reference of dbconnection.js

var pastorderdetails={


  getpastorderdetails:function(fk_billid,callback){
    return db.query("select bd.*,d.* from  bill_details bd,dish d where bd.fk_did=d.did and bd.fk_billid=?",[fk_billid],callback);
  }

}
module.exports=pastorderdetails;
