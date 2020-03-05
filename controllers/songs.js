const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    `SELECT songs.id as song_id, genres.name as genre, artists.name as artist_name, songs.name as song_name, albums.name as album_name, albums.cover as album_cover, songs.audio FROM songs
    LEFT JOIN albums 
    ON songs.album=albums.id
    LEFT JOIN artists 
    ON songs.artist=artists.id
    LEFT JOIN genres 
    ON genres.id=songs.genre`,
    (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
