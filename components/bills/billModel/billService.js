const bill = require("../../../server/model/bill")

exports.list = async (pageNumber, nPerPage) =>{
    let result= bill.find({});  
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}
