<<<<<<< HEAD
exports.list = (req, res) => {
  res.render('../components/auth/loginView/screen',{wrongPassword: req.query.wrongPassword !== undefined})
}

exports.register = (req, res) => {
  res.render('../components/auth/loginView/register-screen')
}
=======
exports.list = (req, res) => {
  res.render('../components/auth/loginView/screen',{wrongPassword: req.query.wrongPassword !== undefined})
}

exports.register = (req, res) => {
  res.render('../components/auth/loginView/register-screen')
}
>>>>>>> d17821c (Fix accounts page)
