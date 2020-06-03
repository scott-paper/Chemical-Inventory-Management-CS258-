var viewHandler = function(req,res){
  if(!req.cookies.userData){
    return res.status(500);
  }
  var query = "SELECT * FROM Inventory";
  var username = req.cookies.userData.username;
  var admin = req.cookies.userData.admin;
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
