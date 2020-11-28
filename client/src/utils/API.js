import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDzB4A00IQRdENSmJxaiOjQhen9K4YRfNs";

export default {
  searchBook: function(query){
      return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all books
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: async function(bookData) {
    console.log("Meena - from utils/API.js: ", bookData);
    const result = await axios.post("/api/books", bookData);
    return result;
  }
};