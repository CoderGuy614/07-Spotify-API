const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT albums.id as album_id ,artists.name as artist, albums.name as name, albums.cover as cover FROM albums 
    LEFT JOIN artists
    ON artists.id=albums.artist
    `,
    (err, results) => {
      if (err) {
        res.send(err);
      } else res.send(results);
    }
  );
});

router.get("/:id", (req, res) => {
  db.query(
    `SELECT albums.id as album_id ,artists.name as artist_name, albums.name as album_name, albums.cover as album_cover FROM albums 
    LEFT JOIN artists
    ON artists.id=albums.artist
    WHERE albums.id=${req.params.id}
    `,
    (err, results) => {
      if (err) {
        res.send(err);
      } else res.send(results);
    }
  );
});

module.exports = router;
