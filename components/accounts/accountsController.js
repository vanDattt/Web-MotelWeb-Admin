<<<<<<< HEAD
const account = require("../../server/model/admin-account")
exports.list = async (req,res) => {
    console.log(1);
    let result= await account.find({});
    console.log(result);
    res.render('../components/accounts/accounts' , { items:result });
}
=======
const accountService=require("./accountModel/accountService")

exports.list = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const accounts= await accountService.list(page, nPerPage);
  res.render('../components/accounts/accountView/accountlistscreen' , { items:accounts });
}

exports.myaccount = async (req,res)=>{
  res.render('../components/accounts/accountView/myaccount');
}
>>>>>>> d17821c (Fix accounts page)
