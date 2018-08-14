var db=require('../dbconnection'); //reference of dbconnection.js

var Customer={

  add:function(Customer,callback){
    return db.query("Insert into customer values(?,?,?,?,?,?,?,?,?)",[Customer.CustomerId,Customer.Name,Customer.Password,Customer.ConfirmPassword,Customer.Age,Customer.MobileNumber,Customer.Gender,Customer.City,Customer.Address],callback);
 },
 login:function(Customer,callback){
  return db.query("select * from customer where CustomerId=? AND Password=?",[Customer.CustomerId,Customer.Password],callback);
 },
 getallCustomers(callback){
   return db.query("select * from customer",callback);
 },
 forgetPassword:function(Customer,callback){
  return db.query("update customer set Password=? and ConfirmPassword=? where CustomerId=?",[Customer.newPassword,Customer.newPassword,Customer.CustomerId],callback);
},
getCustomerById:function(CustomerId,callback){
  return db.query("select * from customer where CustomerId=?",[CustomerId],callback);
},
getalladmins:function(callback){
  return db.query("select * from admin_tbl",callback);
},
getadminbyid:function(adminid,callback){
  return db.query("select * from admin_tbl where adminid=?",[adminid],callback);
},
adminlogin:function(admin,callback){
  return db.query("select * from admin_tbl where adminid=? AND adminpassword=?",[admin.adminid,admin.adminpassword],callback);
}


}
module.exports=Customer;
