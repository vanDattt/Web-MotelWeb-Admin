const billService=require("./billModel/billService")

exports.list = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const bills= await billService.list(page, nPerPage);
  res.render('../components/bills/billView/billscreen' , { items:bills });
}

exports.date = async (req,res) => {
  var date = req.body.day;
  var year = date.substring(0,4);
  var one = date.indexOf("-");
  var two = date.lastIndexOf("-");
  var day = date.substr(two+1);
  var month = date.substr(one+1,two-one-1);
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);

  const bills= await billService.date(page, nPerPage,day,month,year);
  var num = bills.length;
  var sum = bills.totalPrice;
  console.log(num);
  res.render('../components/bills/billView/billscreen' , { items:bills });
}

exports.month = async (req,res) => {
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const bills= await billService.month(page, nPerPage,month,year);
  res.render('../components/bills/billView/billscreen' , { items:bills });
}

exports.year = async (req,res) => {
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const bills= await billService.year(page, nPerPage,year);
  res.render('../components/bills/billView/billscreen' , { items:bills });
}
