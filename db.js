const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b1ee4b433ac203",
  password: "25b01381",
  database: "heroku_497550bddc8d143",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

db.connect(err => {
  if (err) {
    console.log({ err });
  } else {
    console.log("Connected");
  }
});

module.exports = db;
