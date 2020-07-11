var updateHandler = function(req,res){
  if(!req.cookies.userData){
    return res.status(500);
  }

  var username = req.cookies.userData.username;
  var admin = req.cookies.userData.admin;

  if(admin!=1){
    return res.status(500);
  }

  var id = req.params.id;

  var query = "SELECT * FROM Inventory WHERE Serial = " + id ;

  db.query(query, function(err,result){
    if(err){
      throw err;
    }
    res.render('edit.ejs',{
      chemical : result[0],
      username : username,
      admin : admin
    });
  });
}

module.exports = {
  updateHandler : updateHandler
}
