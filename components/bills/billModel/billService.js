const bill = require("../../../server/model/bill")

exports.list = async (pageNumber, nPerPage) =>{
    let result= bill.find({});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.date = async (day, month ,year) =>{
    var day1 = parseInt(day)+1;
    var month1 = parseInt(month)-1;
    var year1 = year;
    let result= bill.find({date: {
        $gte: new Date(year, month-1, day),
        $lt: new Date(year1,  month1, day1) }
      });
    return result;
}

exports.month = async (month ,year) =>{
  var month1 = parseInt(month)-1;
  var year1 = year;
    let result= bill.find({date: {
        $gte: new Date(year, month-1, 1),
        $lt: new Date(year1, month1, 31) }
      });

    return result;
}

exports.year = async (year) =>{
    var year1 = parseInt(year)+1;
    let result= bill.find({date: {
        $gte: new Date(year, 0, 1),
        $lt: new Date(year1, 0, 1) }
      });

    return result;
}

exports.totalPrice = async (bills) =>{
    let result = 0;
    if(bills.length!=1)
    {
      for(i=0; i<bills.length; i++)
      {
          result=result+bills[i].totalPrice
      }
    }else{
      result=bills[0].totalPrice      
    }
    return result;
}
