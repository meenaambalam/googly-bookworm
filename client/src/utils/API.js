import axios from "axios";

// GoogleBooks API URL
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "&key=";
let APIKEY;
// Get APIKey hidden in the env file
async function getAPIKey() {
  await axios.get("/api/get_apikey")
    .then(function (res) {
      console.log("APIKEY returned from Server:", res.data);
      return APIKEY = res.data;
    })
    .catch(function (err) {
      console.log("APIKEY get error: ", err);
    });
}

export default {
  // Search Books from GoogleBooks API with search string
  searchBook: async function (query) {
    await getAPIKey();
    return axios.get(BASEURL + query + key + APIKEY);
  },
  // Saves a book to the database
  saveBook: async function (bookData) {
    const result = await axios.post("/api/books", bookData);
    return result;
  },
  // Gets all books
  getAllBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};