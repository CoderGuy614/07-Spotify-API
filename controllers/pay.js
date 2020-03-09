const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SK);

router.post("/", (req, res) => {
  stripe.charges
    .create({
      amount: 999,
      currency: "usd",
      description: "Spotify Premium",
      source: req.body.token
    })
    .then(results => {
      if (results) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    });
});
module.exports = router;
