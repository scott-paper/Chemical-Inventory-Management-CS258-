var addHandler = function(req,res){
  if(!req.cookies.userData){
    return res.status(500);
  }

  var username = req.cookies.userData.username;
  var admin = req.cookies.userData.admin;

  if(admin!=1){
    return res.status(500);
  }

  res.render('add.ejs');
}

module.exports = {
  addHandler : addHandler
}
