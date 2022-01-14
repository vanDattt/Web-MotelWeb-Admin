const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const roomSchema= new Schema (
{
    id: Number,
    name: String,
    type: String,
    price: Number,
    image: String,
    quantity: Number,
    status: String,
    archived: Boolean,
  },
  { versionKey: false });
  module.exports = mongoose.model('rooms', roomSchema);
