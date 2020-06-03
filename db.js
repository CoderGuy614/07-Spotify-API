const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b1ee4b433ac203",
  password: "25b01381",
  database: "heroku_497550bddc8d143",
});

db.connect((err) => {
  if (err) {
    db.connect((err) => {
      console.log({ err });
    });
  } else {
    console.log("Connected");
  }
});

// function handleDisconnect() {
//   db = mysql.createConnection(db_config);
//   db.connect(function (err) {
//     if (err) {
//       console.log("error when connecting to db:", err);
//       setTimeout(handleDisconnect, 2000);
//     }
//   });
//   db.on("error", function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }

// handleDisconnect();

module.exports = db;
