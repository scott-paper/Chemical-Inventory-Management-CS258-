var postadd = function(req,res){

  var query = "INSERT INTO Inventory ( ";
  var query2 = "VALUES (";
  for(let key in req.body){

    var value = req.body[key];

    var x = key.split("_");

    var y = x[0].charAt(0).toUpperCase() + x[0].slice(1);
    query += y;

    if(x[1]){
        var z = x[1].charAt(0).toUpperCase() + x[1].slice(1);
        query += "_" + z;
    }

    query2 += "'" + value + "'";

    query += " , ";
    query2 += " , ";

  }

  query = query.slice(0,-2);
  query2 = query2.slice(0,-2);
  query += ") ";
  query2 += ");";
  query += query2;

  console.log(query);


  db.query(query,function(err,result){
    if(err){
      throw err;
    }
    res.redirect('/view');
  });
}

module.exports = {
  postadd : postadd
}
