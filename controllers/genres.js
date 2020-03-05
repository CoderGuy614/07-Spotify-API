const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(`SELECT * FROM genres`, (err, results) => {
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT * FROM genres where id = ${req.params.id}`,
    (err, results) => {
      res.send(results);
    }
  );
});

module.exports = router;
