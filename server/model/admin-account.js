<<<<<<< HEAD
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
=======
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
>>>>>>> d17821c (Fix accounts page)
