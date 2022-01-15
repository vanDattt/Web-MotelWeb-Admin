const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const useraccountSchema= new Schema (
{
    archived: Boolean,
    email: String,
    name: String,
    gender: String,
    phoneNumber: String,
    username: String,
  },
  { versionKey: false });
  module.exports = mongoose.model('accounts', useraccountSchema);
