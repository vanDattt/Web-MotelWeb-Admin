const bill = require("../../../server/model/bill")

exports.list = async (pageNumber, nPerPage) =>{
    let result= bill.find({});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.date = async (pageNumber, nPerPage, day, month ,year) =>{
    var day1 = parseInt(day)+1;
    var month1 = month-1;
    var year1 = year;
    var test=new Date(year, month-1, day);
    var test2 = new Date(year1, month1, day1);
    console.log(test);
    console.log(test2);
    console.log(day1);
    console.log(month1);
    console.log(year1);
    let result= bill.find({date: {
        $gte: new Date(year, month-1, day),
        $lt: new Date(year1,  month1, day1) }
      });
      console.log(result);
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.month = async (pageNumber, nPerPage, month ,year) =>{

    let result= bill.find({date: {
        $gte: new Date(year, month, day),
        $lt: new Date(year, month, day+1) }
      });
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.year = async (pageNumber, nPerPage, year) =>{

    let result= bill.find({date: {
        $gte: new Date(year, month, day),
        $lt: new Date(year, month, day+1) }
      });
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}
