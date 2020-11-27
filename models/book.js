const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String},
    image: String,
    description: String,
    infoLink: String,
    date: {type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

