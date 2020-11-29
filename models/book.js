const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookId: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String},
    image: String,
    description: String,
    infoLink: String
    });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


