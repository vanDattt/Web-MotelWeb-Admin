<<<<<<< HEAD
//const bcrypt = require('bcrypt')
const adminAccount = require('../../server/model/admin-account');
exports.register = async (username, email, password) => {
  const account = await adminAccount.findOne({Email: email});
    console.log(5);
    if(account) {
        throw new Error('Email already registerd');
      }    
      return adminAccount.create({Username: username,Password: password,AccountCreateDate:"2021-12-06", Email: email,Status:true,  AccountID: "000", });
};
=======
//const bcrypt = require('bcrypt')
const adminAccount = require('../../server/model/admin-account');
exports.register = async (username, email, password) => {
  const account = await adminAccount.findOne({email: email});
    console.log(5);
    if(account) {
        throw new Error('Email already registerd');
      }
      return adminAccount.create({username: username,password: password,initiatedDate:"2021-12-06", email: email,Status:true,  accountID: "000", });
};
>>>>>>> d17821c (Fix accounts page)
