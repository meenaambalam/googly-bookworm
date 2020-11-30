const router = require("express").Router();

// Matches with "/api/get_apikey"
// To get the API Key from the env file
router.route("/")
  .get(function (req,res) {
      let apiKey = process.env.GOOGLY_BOOKWORM_API_KEY;
      res.json(apiKey);
  })


module.exports = router;
