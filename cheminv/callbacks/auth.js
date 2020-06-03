var auth = function(req,res){
  var userID = req.body.userID;
  var password = req.body.password;

  var query = "SELECT * FROM User WHERE UserID = '" + userID + "' AND Password = '" + password + "'";

  db.query(query,function(err,result){
    if(err){
      return res.status(500).send(err);
    }
    var user = {
      username : result[0].Username,
      admin : result[0].Admin
    };
    console.log(user);
    res.cookie("userData",user);
    res.redirect('/view');
  });
}

module.exports = {
  auth : auth
}
