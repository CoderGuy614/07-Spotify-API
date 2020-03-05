const router = require("express").Router();
const db = require("../db");

router.get("/", (req, res) => {
  let key = Object.keys(req.query)[0];
  let value = Object.values(req.query)[0];
  let SQL = "";
  if (!key) {
    SQL = `SELECT songs.id as song_id, genres.name as genre, artists.name as artist, songs.name as name, albums.name as album, albums.cover as album_cover, songs.audio FROM songs
    LEFT JOIN albums 
    ON songs.album=albums.id
    LEFT JOIN artists 
    ON songs.artist=artists.id
    LEFT JOIN genres 
    ON genres.id=songs.genre`;
  } else {
    SQL = `SELECT songs.id as song_id, genres.name as genre, artists.name as artist, songs.name as name, albums.name as album, albums.cover as album_cover, songs.audio FROM songs
    LEFT JOIN albums 
    ON songs.album=albums.id
    LEFT JOIN artists 
    ON songs.artist=artists.id
    LEFT JOIN genres 
    ON genres.id=songs.genre
    WHERE songs.${key}=${value}`;
  }
  db.query(SQL, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
