exports.register = async (req, res) => {
  const {username,email,password} = req.body;
  try{
      if(!username|| !email|| !password)
      {
        res.render('../components/auth/loginView/register-screen',{errorCode:1})
      } else {
        const authService = require('./authService');
        await authService.register(username,email,password);
        res.redirect('/');
      }
  }catch(error){    
    res.render('../components/auth/loginView/register-screen',{errorCode:2});
  }
};
