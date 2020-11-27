const router = require("express").Router();
const Book = require("../models/book.js");

console.log("Printing inside routes/api.js file")
router.post("/api/books", (req, res) => {
  console.log("body: ", req.body);
  Book.create(req.body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/books/bulk", ({ body }, res) => {
  Book.insertMany(body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/book", (req, res) => {
  Book.find({})
    .sort({ date: -1 })
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
