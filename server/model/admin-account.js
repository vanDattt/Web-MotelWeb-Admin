const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectID= Schema.ObjectID;

const adminaccountSchema= new Schema (
{
    Username: String,
    Password: String,
    AccountCreateDate: Date,
    Status: Boolean,
    Email: String,
    AccountID: String,
  },
  { versionKey: false });
  module.exports = mongoose.model('admin-accounts', adminaccountSchema);
