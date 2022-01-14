const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const adminaccountSchema= new Schema (
{
    Status: Boolean,
    accountID: String,
    email: String,
    fullname: String,
    gender: String,
    initiatedDate: Date,
    password: String,
    phoneNumber: String,
    username: String,
    fullname: String,
  },
  { versionKey: false });
  module.exports = mongoose.model('admin-accounts', adminaccountSchema);
