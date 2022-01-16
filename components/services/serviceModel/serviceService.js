const service = require("../../../server/model/service")

exports.list = (pageNumber, nPerPage) =>{
    let result=service.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
}

exports.detail = (serviceID) =>{
    if((service.findOne({id: serviceID}))==null) throw error;
    return service.findOne({id: serviceID});
}

exports.add = async (pageNumber, nPerPage,item) =>{
    if((service.findOne({name: item.name}))!=null)
     {
      item.name = item.name + '(2)';
      console.log(item.name);
     }
    await service.create({name: item.name,type: item.type,price: item.price, amount: 100,image: item.image, archived: false});
    let result=service.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);

}

exports.update = async (pageNumber, nPerPage,item,prename) =>{
    service.findOneAndUpdate({name: prename},{$set: {name: item.name,type: item.type,price: item.price, amount: 100,image: item.image, archived: false}},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    result=service.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    });
}

exports.erase = async (pageNumber, nPerPage,prename) =>{
    service.findOneAndUpdate({name: prename},{$set: {archived: true }},{upsert: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    result=service.find({archived: false});
    return result.skip(pageNumber > 0 ? (pageNumber -1)*nPerPage : 0).limit(nPerPage);
    });
}

exports.search = (pageNumber, nPerPage, name) =>{
    let result=service.find({name: {$regex: name, $options: '-i'} ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}

exports.sortFood = (pageNumber, nPerPage) =>{
    let result=service.find({type: 'food' ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}

exports.sortDrinks = (pageNumber, nPerPage) =>{
    let result=service.find({type: 'drinks' ,archived: false}).limit(nPerPage).skip((pageNumber -1)*nPerPage);
    return result;
}
