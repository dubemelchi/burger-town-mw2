const ORM = require("../../../config/orm");

const burger = {
  select: (cb) => {
    ORM.select("burgers", (results) => {
      cb(results);
    });
  },
  create: (column, values, cb) => {
    ORM.create("burgers", column, values, (results) => {
      cb(results);
    });
  },
  update: (column, newVal, whereCol, whereVal, cb) => {
    ORM.update("burgers", column, newVal, whereCol, whereVal, (results) => {
      cb(results);
    });
  },
}