const accountService=require("./accountModel/accountService")

exports.list = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const accounts= await accountService.list(page, nPerPage);
  res.render('../components/accounts/accountView/accountlistscreen' , { items:accounts });
}

exports.myaccount = async (req,res)=>{
  const uname =  req.user.username;
  console.log(uname);
  const account = await accountService.myaccount(uname);
  res.render('../components/accounts/accountView/myaccount',{ acc: account });
}
