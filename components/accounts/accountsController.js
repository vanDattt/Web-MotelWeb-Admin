const accountService=require("./accountModel/accountService")

exports.list = async (req,res) => {
  let nPerPage= 8;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const accounts= await accountService.list(page, nPerPage);
  res.render('../components/accounts/accountView/accountlistscreen' , { items:accounts });
}

exports.userlist = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const accounts= await accountService.userlist(page, nPerPage);
  res.render('../components/accounts/accountView/useraccountlistscreen' , { items:accounts });
}

exports.userdetail = async (req,res) => {
  const uname = req.params.id;
  const account = await accountService.detail(uname);
  res.render('../components/accounts/accountView/useraccountdetailscreen' , { item:account });
}

exports.banuser = async (req,res) => {
  const uname = req.params.id;
  const account = await accountService.ban(uname);
  res.render('../components/accounts/accountView/useraccountbanscreen');
}

exports.myaccount = async (req,res)=>{
  const uname =  req.user.username;
  console.log(uname);
  const account = await accountService.myaccount(uname);
  res.render('../components/accounts/accountView/myaccount',{ acc: account });
}

exports.myaccountUpdate = async (req,res)=>{
    const accID = req.user.accountID;
    const item = {
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    date:req.body.date,
    gender: req.body.gender,
    email: req.body.email,
    };
    if(item.username===""||item.fullname===""||item.password===""||item.phoneNumber===""||item.date===""||item.email==="")
    {
      res.redirect('/accounts/myaccount');
    }else{
      const account = await accountService.myaccountUpdate(item,accID);
      res.redirect('/logout');
    }
}
