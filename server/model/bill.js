const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId= Schema.ObjectId;

const billSchema= new Schema (
{
    name: String,
    date: Date,
    totalPrice: Number,
    customerEmail:  String,
    roomName:  String,
    serviceName:  [String],
  },
  {
  versionKey: false,
});
  module.exports = mongoose.model('bills', billSchema);
