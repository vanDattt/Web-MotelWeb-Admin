//const bcrypt = require('bcrypt')
const adminAccount = require('../../server/model/admin-account');
exports.register = async (fullname,username, email, password,gender,phone) => {
  const account = await adminAccount.findOne({email: email});
    console.log(5);
    if(account) {
        throw new Error('Email already registerd');
      }
      return adminAccount.create({fullname: fullname, username: username,password: password,initiatedDate:"2022-01-12", email: email,archived:false,  accountID: 0, gender: gender, phoneNumber: phone });
};
