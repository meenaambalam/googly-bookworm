import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDzB4A00IQRdENSmJxaiOjQhen9K4YRfNs";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search : function(query) {
        console.log("API URL: " + BASEURL + query + APIKEY);
        return axios.get(BASEURL + query + APIKEY);
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id){
        return axios.delete("api/books" + id);
    }
}