const billService=require("./billModel/billService")

exports.list = async (req,res) => {
  let nPerPage= 3;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const bills= await billService.list(page, nPerPage);
  res.render('../components/bills/billView/billscreen' , { items:bills });
}
