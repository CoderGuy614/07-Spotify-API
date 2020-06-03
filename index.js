// Require
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

// App
const app = express();

//Cors Options
// const corsOptions = {
//   origin: "https://spotify-client-jlutz.herokuapp.com",
//   optionsSuccessStatus: 200,
// };

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  "*",
  createProxyMiddleware({
    target: "https://spotify-client-jlutz.herokuapp.com",
    secure: false,
    changeOrigin: true,
  })
);

app.use(
  cors({
    origin: "https://spotify-client-jlutz.herokuapp.com",
  })
);
app.options("*", cors());

// Routes
app.use("/artists", require("./controllers/artists"));
app.use("/songs", require("./controllers/songs"));
app.use("/albums", require("./controllers/albums"));
app.use("/genres", require("./controllers/genres"));
app.use("/pay", require("./controllers/pay"));

// Server
app.listen(process.env.PORT, (err) => {
  err
    ? () => {
        throw err;
      }
    : console.log(`Ready on port ${process.env.PORT}`);
});
module.exports = app;
