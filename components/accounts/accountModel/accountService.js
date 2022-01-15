const account = require("../../../server/model/admin-account")
const useraccount = require("../../../server/model/user-account")

exports.list = async (pageNumber, nPerPage) =>{
    let result= account.find({});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.userlist =  async (pageNumber, nPerPage) =>{
    let result= useraccount.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.detail = async (uname) =>{
    let result= useraccount.find({username: uname});
    return result;
}

exports.ban = async (uname) =>{
    useraccount.findOneAndUpdate({username: uname},{$set: {archived: true}},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return 1;
    });
}

exports.myaccount = async (uname) =>{
    let result= await account.findOne({username: uname});
    return result;
}

exports.myaccountUpdate = async (item,id) =>{
    account.findOneAndUpdate({accountID: id},{$set: {username: item.username,fullname: item.fullname,password: item.password,phoneNumber: item.phoneNumber, date: item.date,  gender: item.gender, email: item.email}},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return 1;
  });
}
