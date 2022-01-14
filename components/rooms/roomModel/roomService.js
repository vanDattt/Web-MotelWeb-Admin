<<<<<<< HEAD
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
    await room.create({name: item.name,status: item.status,price: item.price,type: item.type,picture: item.picture, archived: item.archived});
    let result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.update = async (pageNumber, nPerPage,item,prename) =>{
    room.findOneAndUpdate({name: prename},{$set: {name: item.name,status: item.status,price: item.price,type: item.type,picture: item.picture, archived: item.archived}},{upsert: false}, function(err, doc) {
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
    let result=room.find({name: {$regex: name} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}
=======
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
    await room.create({name: item.name,status: item.status,price: item.price,type: item.type,picture: item.picture, archived: item.archived});
    let result=room.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.update = async (pageNumber, nPerPage,item,prename) =>{
    room.findOneAndUpdate({name: prename},{$set: {name: item.name,status: item.status,price: item.price,type: item.type,picture: item.picture, archived: item.archived}},{upsert: false}, function(err, doc) {
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
    let result=room.find({name: {$regex: name} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}
>>>>>>> d17821c (Fix accounts page)
