var auth = function(req,res){
  var userid = req.body.username;
  var password = req.body.password;

  var query = "SELECT * FROM USERS WHERE UserID = '" + userID + "' AND Password = '" + password + "'";

  db.query(query,function(err,result){
    if(err){
      return res.status(500).send(err);
    }
    var user = {
      username : result[0].Username,
      admin : result[0].admin
    };
    res.cookies("userData",user);
    res.render('home.ejs')
  });
}

module.exports = {
  auth : auth
}
