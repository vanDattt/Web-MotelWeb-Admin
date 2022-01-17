const billService=require("./billModel/billService")

exports.list = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const bills= await billService.list(page, nPerPage);
  const sum = await billService.totalPrice(bills);
  res.render('../components/bills/billView/billscreen' , { items:bills,sum:sum });
}

exports.date = async (req,res) => {
  var date = req.body.day;
  var year = date.substring(0,4);
  var one = date.indexOf("-");
  var two = date.lastIndexOf("-");
  var day = date.substr(two+1);
  var month = date.substr(one+1,two-one-1);
  const bills= await billService.date(day,month,year);
  const sum = await billService.totalPrice(bills);
  res.render('../components/bills/billView/billscreen' , { items:bills,sum:sum});
}

exports.month = async (req,res) => {
  var date = req.body.month;
  var year = date.substring(0,4);
  var one = date.indexOf("-");
  var month = date.substr(one+1);
  const bills= await billService.month(month,year);
  const sum = await billService.totalPrice(bills);
  res.render('../components/bills/billView/billscreen' , { items:bills,sum:sum});
}

exports.year = async (req,res) => {
  var year = req.body.year;
  const bills= await billService.year(year);
  const sum = await billService.totalPrice(bills);
  res.render('../components/bills/billView/billscreen' , { items:bills,sum:sum});
}
