import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDzB4A00IQRdENSmJxaiOjQhen9K4YRfNs";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
    async searchBook(query){
        let res;
        console.log("get Searched Books: ", query);
        try{
            res = axios.get(BASEURL + query + APIKEY);
        } catch (err){
            console.log(err);
        }
        return res;
    },
    async saveBook(bookData){
        console.log("Printing from SaveBook API call: ", bookData);
        const res = await fetch("/api/books", {
            method: "POST",
            body: JSON.stringify(bookData),
            headers: {"Content-Type": "application/json"}
        });
        return res;
    },
    async getAllBooks(){
        console.log("Printing from getAllBooks API call: ");
        let res;
        try{
            res = await fetch("/api/books");
        } catch(err) {
            console.log(err)
        }
        return res;
    }
}

export default API;
// export default {
//     search : function(query) {
//         console.log("API URL: " + BASEURL + query + APIKEY);
//         return axios.get(BASEURL + query + APIKEY);
//     },
//     saveBook: function(bookData){
//         console.log("SAVE BOOK API call", bookData);
//         return axios.post("/api/books", bookData);
//     },
//     getBooks: function(){
//         return axios.get("/api/books");
//     },
//     deleteBook: function(id){
//         return axios.delete("/api/books" + id);
//     }
// }