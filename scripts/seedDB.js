const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/googliesbooklist"
);

const bookSeed = [
    {   
        id: "ZbUACwAAQBAJ",
        title: "The Dead Zone",
        author: "Stephen King",
        image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
        "Set in the fictional town of Castle Rock, Maine A #1 New York Times bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind—a “compulsive page-turner” (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (The Houston Post), The Dead Zone is a “faultlessly paced…continuously engrossing” (Los Angeles Times) novel of second sight.",
        infoLink: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api",
        date: new Date(Date.now())
      },
      {   
        id: "__AEygEACAAJ",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        image: "http://books.google.com/books/content?id=__AEygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        description:
        "The \"brilliant, funny, meaningful novel\" (The New Yorker) that established J. D. Salinger as a leading voice in American literature--and that has instilled in millions of readers around the world a lifelong love of books. \"If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth.\" The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
        infoLink: "http://books.google.com/books?id=__AEygEACAAJ&dq=CAtcher+in+the+Rye&hl=&source=gbs_api",
        date: new Date(Date.now())
      }
];

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});