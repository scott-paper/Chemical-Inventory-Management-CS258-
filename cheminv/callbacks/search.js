var searchHandler = function(req,res){
  var code = req.body.drugcode;
  var query = "SELECT * FROM Drug WHERE Drug_code = '" + code + "'" ;
  db.query(query , function(err,result){
    if(err){
      throw error;
    }
    res.render('view.ejs',{
      result : result,
      admin : 1
    });
  });
}

module.exports = {
  searchHandler : searchHandler
}
