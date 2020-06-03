var updateHandler = function(req,res){
  if(!req.cookies.user){
    return res.status(500);
  }

  var username = req.cookies.user.username;
  var admin = req.cookies.user.admin;

  if(admin!=1){
    return res.status(500);
  }

  var id = req.params.id;

  var query = "SELECT * FROM Inventory WHERE Serial = " + id ;

  db.query(query, function(err,result){
    if(err){
      throw error;
    }
    res.render('update.ejs',{
      result : result,
      username : username,
      admin : admin
    });
  });
}

module.exports = {
  updateHandler : updateHandler
}
