const mysql = require('mysql');

///*
connection = mysql.createConnection(
    {
		 host: 'us-cdbr-sl-dfw-01.cleardb.net',
		  user: 'bd84f383c0825e',
		  password: '1c361825',
		  database: 'ibmsl_87bbd800f198a455470d'
    }
);
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
