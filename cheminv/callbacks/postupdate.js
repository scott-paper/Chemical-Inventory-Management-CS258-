var postupdate = function(req,res){


  var query = "UPDATE Inventory SET ";

  for(let key in req.body){

    var value = req.body[key];

    var x = key.split("_");

    var y = x[0].charAt(0).toUpperCase() + x[0].slice(1);
    query += y;

    if(x[1]){
        var z = x[1].charAt(0).toUpperCase() + x[1].slice(1);
        query += "_" + z;
    }

    query += " = ";

    if (typeof(value) == "number") {
      query += value;
    }
    else {
      query += "'" + value + "'";
    }

    query += " , ";

  }

  query = query.slice(0,-2);
  query += "WHERE Serial = " + req.params.id + " ;";
  console.log(query);


//alert??
  db.query(query,function(err,result){
    if(err){
      throw err;
      //return res.status(500).send(err);
    }
    res.redirect('/view');
  });
  console.log(req.body);

}

module.exports = {
  postupdate : postupdate
}
