// import mysql connection
const connection = require("../config/connection");

const ORM = {
 select: (table, cb) => {
  let query = "SELECT * FROM ??";

  connection.query(query, [table], (err, results) => {
   if (err) {
    throw err;
   }
   console.log(results);
   cb(results);
  });
 },

 create: (table, column, value) => {
  let insertQuery = " INSERT INTO ?? (??) VALUES(?)"

  connection.query(insertQuery, [table, column, value], (err, results) => {
   if (err) {
    throw err;
   }
   console.log(results);

  });
 },

 update: (table, column, newVal, whereCol, whereVal) => {
  let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

  connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, results) => {
   if (err) {
    throw err;
   }
   console.log(results)
  });
 },

 delete: (table, column, value) => {
   let deleteQuery = "DELETE FROM ?? WHERE ?? = ?"

   connection.query(deleteQuery, [table, column, value], (err, results) => {
     if (err) {
       throw err;
     }
     console.log(results);
   });
 },
 
}

module.exports = ORM;