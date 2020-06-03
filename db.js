const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "czkvtcbz197cp60d",
  password: "cldntf4gajmbxro5",
  database: "yfgrttsjofd8dp70",
});

db.connect((err) => {
  if (err) {
    console.log({ err });
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
