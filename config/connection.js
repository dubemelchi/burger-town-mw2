// Setup mysql connection
const mysql = require("mysql");

const dotenv = require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
 host: "localhost",
 port: 8889,
 user: process.env.SERVER_ID,
 password: process.env.SERVER_SECRET,
 database: "burger_db"
 })
}

// make connection
connection.connect(function(err) {
 if (err) {
  console.error("error connecting: " + err.stack);
  return;
 }
 console.log("connected as id " + connection.threadId);
});

// export connection for ORM to use
module.exports = connection;
