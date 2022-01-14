exports.register = async (req, res) => {
  const {fullname,username,email,password,gender,phone} = req.body;
  try{
      if(!username|| !email|| !password  || !fullname || !phone || !gender)
      {
        res.render('../components/auth/loginView/register-screen',{errorCode:1})
      } else {
        const authService = require('./authService');
        await authService.register(fullname,username,email,password,gender,phone);
        res.redirect('/');
      }
  }catch(error){
    res.render('../components/auth/loginView/register-screen',{errorCode:2});
  }
};
