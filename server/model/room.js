const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const roomSchema= new Schema (
{
    name: String,
    type: String,
    price: Number,
    status: String,
    archived: Boolean,
    picture: String,  
  },
  { versionKey: false });
  module.exports = mongoose.model('room', roomSchema);
