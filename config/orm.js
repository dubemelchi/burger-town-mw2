// import mysql connection
const connection = require("../config/connection");

const ORM = {
 select: (table, cb) => {
  let query = "SELECT * FROM ??";

  connection.query(query, [table], (err, result) => {
   if (err) {
    throw err;
   }
   console.log(result);
   cb(result);
  });
 },

 create: (table, column, value) => {
  let insertQuery = " INSERT INTO ?? (??) VALUES(?)"

  connection.query(insertQuery, [table, column, value], (err, result) => {
   if (err) {
    throw err;
   }
   console.log(result);

  });
 },

 update: (table, column, newVal, whereCol, whereVal) => {
  let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

  connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, result) => {
   if (err) {
    throw err;
   }
   console.log(result)
  });
 },

 delete: (table, column, value) => {
   let deleteQuery = "DELETE FROM ?? WHERE ?? = ?"

   connection.query(deleteQuery, [table, column, value], (err, result) => {
     if (err) {
       throw err;
     }
     console.log(result);
   });
 },
 
}

module.exports = ORM;