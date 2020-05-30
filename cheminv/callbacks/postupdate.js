var postupdate = function(req,res){
  var stock = req.body.stock;

  var query = "UPDATE Inventory ...";

  db.query(query,function(err,result){
    if(err){
      return res.status(500).send(err);
    }
    res.redirect('/view');
  });
}

module.exports = {
  postupdate : postupdate
}
