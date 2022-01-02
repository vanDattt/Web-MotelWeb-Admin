const account = require("../../server/model/admin-account")
exports.list = async (req,res) => {
    console.log(1);
    let result= await account.find({});
    console.log(result);
    res.render('../components/accounts/accounts' , { items:result });
}
