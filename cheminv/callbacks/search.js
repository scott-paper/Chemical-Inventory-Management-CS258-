var searchHandler = function(req,res){
  var item_name = req.body.item_name;
  var location = req.body.location;
  console.log(req.body);
  var username = req.cookies.userData.username;
  var admin = req.cookies.userData.admin;
  var query = "SELECT * FROM Inventory WHERE Item_Name LIKE '%" + item_name + "%' AND Location LIKE '%" + location + "%'" ;
  db.query(query , function(err,result){
    if(err){
      throw error;
    }
    console.log(result);
    res.render('query.ejs',{
      result : result,
      username : username,
      admin : admin
    });
  });
}

module.exports = {
  searchHandler : searchHandler
}
