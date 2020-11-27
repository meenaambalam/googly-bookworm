import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
    console.log("Printing from Jumbotron");
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h6 className="display-6">Are you a Book Worm? Discover the world of Books!</h6>
                <p>Googly Bookworm, uses Google Books API to perform full-text searches and retrieve book information. You can save your fav and manage your personal bookshelves.</p>
            </div>
        </div>
    );
}

export default Jumbotron;