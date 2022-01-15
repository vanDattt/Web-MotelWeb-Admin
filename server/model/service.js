const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const serviceSchema= new Schema (
{
    name: String,
    type: String,
    price: Number,
    amount: Number,
    image: String,
    archived: Boolean,
  },
  { versionKey: false });
  module.exports = mongoose.model('services', serviceSchema);
