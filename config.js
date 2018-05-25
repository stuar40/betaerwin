
var mysql = require('mysql');

var mysqlPool  = mysql.createPool({
    host : "160.153.16.62",
    user : "autoparking2018",
    password: "autoparking@2018",
    database :"autoparking_v1",
    port:3306

});

module.exports = mysqlPool;

//*/
/*
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'autoparking',
        password: 'autoparking',
        database: 'autoparking'
    });
  connection.connect(function(err){
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
  });
*/

module.exports = connection;
