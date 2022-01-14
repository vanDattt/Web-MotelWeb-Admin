const account = require("../../../server/model/admin-account")

exports.list = (pageNumber, nPerPage) =>{
    let result=account.find({});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.myaccount = (uname) =>{
    console.log(uname);
    let result=account.findOne({username: uname});
    console.log(result.email);
    return result;
}
