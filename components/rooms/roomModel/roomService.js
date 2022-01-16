const room = require("../../../server/model/room")

exports.list = (pageNumber, nPerPage) =>{
    let result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.detail = (roomID) =>{
    if((room.findOne({id: roomID}))==null) throw error;
    return room.findOne({id: roomID});
}

exports.add = async (pageNumber, nPerPage,item) =>{
    const roomID = await (room.count()) + 1;
    console.log(roomID);
    await room.create({id: roomID,name: item.name,status: item.status,price: item.price,type: item.type,image: item.image, quantity: item.quantity, archived: false});
    let result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.update = async (pageNumber, nPerPage,item,prename) =>{
    room.findOneAndUpdate({name: prename},{$set: {name: item.name,status: item.status,price: item.price,type: item.type, image: item.image,  quantity: item.quantity, archived: false}},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    });
}

exports.erase = async (pageNumber, nPerPage,prename) =>{
    room.findOneAndUpdate({name: prename},{$set: {archived: true }},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    });
}

exports.search = (pageNumber, nPerPage, name) =>{
    let result=room.find({name: {$regex: name, $options: '-i'} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}

exports.sortHigh = (pageNumber, nPerPage) =>{
    let result=room.find({price: { $gt: 499999} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}

exports.sortLow = (pageNumber, nPerPage) =>{
    let result=room.find({price: { $lt: 300001} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}
