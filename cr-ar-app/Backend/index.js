var express = require("express");
var mysql = require("mysql");
var cors = require('cors');
var app = express();
app.use(cors());
var db = require("./database");

app.get("/courses",(req, res) => {
  console.log("newsem course table");
  let sql = "SELECT * FROM course";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.listen(3300, function () {
  console.log("App Listening on port 3300");
  db.connect(function (err) {
      if (err) throw (err);
      console.log('Database Connected');
  })
});

app.get("/courseTable",(req, res)=>{
  console.log("course table view");
  let sql="SELECT * FROM course_history";
  db.query(sql,(err, results) =>{
    if(err) return res.json(err);
    return res.json(results);
  });
});
