var loginHandler = function(req,res){
  res.render('./login/new_login.ejs');
}

module.exports = {
  loginHandler : loginHandler
}
