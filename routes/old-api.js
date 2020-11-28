const Book = require("../models/book.js");

module.exports = function (app) {
  app.post("/api/books", (req, res) => {
    console.log(" Printing inside routes/api.js file -> body: ", req.body);
    console.log("BOOK: ", Book);

    Book.create(
      {
        id: '48W2DwAAQBAJ',
        title: 'Treasure Island!!!',
        author: ['Sara Levine'],
        image: 'http://books.google.com/books/content?id=48W2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'A young slacker decides to live her life according to Robert Louis Stevenson’s classic adventure: “A rollicking tale, shameless, funny and intelligent” (The New York Times). When a college graduate with a history of hapless jobs (ice cream scooper, gift wrapper, laziest ever part-time clerk at The Pet Library) reads Robert Louis Stevenson’s novel Treasure Island, she is dumbstruck by the timid design of her life. When had she ever dreamed a scheme? When had she ever done a foolish, overbold act? When had she ever, like Jim Hawkins, broken from her friends, raced for the beach, stolen a boat, killed a man, and eliminated an obstacle that stood in the way of her getting a hunk of gold? Convinced that Stevenson’s book is cosmically intended for her, she redesigns her life according to its Core Values: boldness, resolution, independence, and horn-blowing. Accompanied by her mother, her sister, and a hostile Amazon parrot that refuses to follow the script, our heroine embarks on a domestic adventure more frightening than anything she’d originally planned. Treasure Island!!! is the story of a ferocious obsession, told by an original voice—“insane, hilarious, and irreverent” (Alice Sebold). “Highly original . . . will keep you entertained in spite of (or more accurately, because of) its toxic narrator.” —Library Journal “A hoot.” —Kirkus Reviews',
        infoLink: 'https://play.google.com/store/books/details?id=48W2DwAAQBAJ&source=gbs_api'
      }
    )
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // console.log("Printing inside routes/api.js file")
  // router.post("/api/books", (req, res) => {
  //   console.log("body: ", req.body);
  //   console.log("BOOK: ", Book);
  //   console.log("RES: ", res);
  //   Book.create(req.body)
  //     .then(dbBook => {
  //       res.json(dbBook);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });


  app.get("/api/books", (req, res) => {
    console.log("ROUTER GET ALL BOOKS: REQ: ", req);
    Book.find({})
      .sort({ date: -1 })
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => {
        // res.status(400).json(err);
        res.json(err);
      });
  });

  // If no API routes are hit, send the React app
  // router.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "../client/public/index.html"));
  // });

};
