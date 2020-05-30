var viewHandler = function(req,res){
  if(!req.cookies.user){
    return res.status(500);
  }
  var query = "SELECT * FROM Drug";
  var username = req.cookies.user.username;
  var admin = req.cookies.user.admin;
  db.query(query, function(err,result){
    if(err){
      throw error;
    }
    res.render('view.ejs',{
      result : result,
      username : username,
      admin : admin
    });
  });
}

module.exports = {
  viewHandler : viewHandler
}
