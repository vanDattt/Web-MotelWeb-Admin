const roomService=require("./roomModel/roomService")

exports.list = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.list(page, nPerPage);
  res.render('../components/rooms/roomView/screen' , { items:rooms });
}

exports.detail = async (req, res) =>{
  try{
    let roomID = req.params.roomID;
    const room = await roomService.detail(roomID);
    console.log(room);
    res.render('../components/rooms/roomView/roomDetail' , { room: room });
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
  if(item.image.indexOf("/images/room-images/")==-1)
  {
    item.image = "/images/room-images/" + item.image;
  }
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.add(page, nPerPage,item);
  res.redirect('/rooms');
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
if(item.image.indexOf("/images/room-images/")==-1)
{
  item.image = "/images/room-images/" + item.image;
}
  const prename = req.body.prename
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.update(page, nPerPage,item,prename);
  res.redirect('/rooms');
}

exports.erase = async (req,res)=>{
  var prename = req.body.prename
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.erase(page, nPerPage, prename);
  res.redirect('/rooms');
}

exports.search = async (req,res)=>{
  let name = req.params.roomName;
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.search(page, nPerPage,name);
  res.render('../components/rooms/roomView/searchscreen' , { items:rooms });
}

exports.sortHigh = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.sortHigh(page, nPerPage);
  res.render('../components/rooms/roomView/sortscreen' , { items:rooms });
}

exports.sortLow = async (req,res)=>{
  let nPerPage= 4;
  let {page} = req.query;
  page= Math.max(parseInt(page)||1,1);
  const rooms= await roomService.sortLow(page, nPerPage);
  res.render('../components/rooms/roomView/sortscreen' , { items:rooms });
}
