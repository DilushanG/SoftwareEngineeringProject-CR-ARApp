var express = require("express");
var mysql = require("mysql");
var cors = require('cors');
var app = express();
app.use(cors());
var db = require("./database");

app.get("/course",(req, res) => {
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
