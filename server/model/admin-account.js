const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const adminaccountSchema= new Schema (
{
    archived: Boolean,
    accountID: Number,
    email: String,
    fullname: String,
    gender: String,
    initiatedDate: Date,
    password: String,
    phoneNumber: String,
    username: String,
  },
  { versionKey: false });
  module.exports = mongoose.model('admin-accounts', adminaccountSchema);
