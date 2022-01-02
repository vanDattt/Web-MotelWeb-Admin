exports.list = (req, res) => {
  res.render('../components/auth/loginView/screen',{wrongPassword: req.query.wrongPassword !== undefined})
}

exports.register = (req, res) => {
  res.render('../components/auth/loginView/register-screen')
}
