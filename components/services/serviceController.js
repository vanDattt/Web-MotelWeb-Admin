const serviceService=require("./serviceModel/serviceService")

exports.list = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.list(page, nPerPage);
  res.render('../components/services/serviceView/screen' , { items:services });
}

exports.detail = async (req, res) =>{
  try{
    let serviceID = req.params.serviceID;
    const service = await serviceService.detail(serviceID);
    res.render('../components/services/serviceView/serviceDetail' , { service: service });
  }
  catch (error) {
    res.render('error',  { message: '404' });
  }
}

exports.add = async (req,res)=>{
    var item = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    image: req.body.image,
    quantity:req.body.quantity,
    status: req.body.status,
  };
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.add(page, nPerPage,item);
  res.redirect('/services');
}

exports.update = async (req,res)=>{
  const item = {
  name: req.body.name,
  type: req.body.type,
  price: req.body.price,
  image: req.body.image,
  quantity:req.body.quantity,
  status: req.body.status,
};
  const prename = req.body.prename
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.update(page, nPerPage,item,prename);
  res.redirect('/services');
}

exports.erase = async (req,res)=>{
  var prename = req.body.prename
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.erase(page, nPerPage, prename);
  res.redirect('/services');
}

exports.search = async (req,res)=>{
  let name = req.params.serviceName;
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.search(page, nPerPage,name);
  res.render('../components/services/serviceView/searchscreen' , { items:services });
}

exports.sortFood = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.sortFood(page, nPerPage);
  res.render('../components/services/serviceView/sortscreen' , { items:services });
}

exports.sortDrinks = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const services= await serviceService.sortDrinks(page, nPerPage);
  res.render('../components/services/serviceView/sortscreen' , { items:services });
}
