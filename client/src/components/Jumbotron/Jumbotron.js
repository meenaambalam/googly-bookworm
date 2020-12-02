import React from "react";
import "./Jumbotron.css";
import googly from "./googly_bookworm.jpg";

// Jumbotron component
function Jumbotron() {
    console.log("Printing from Jumbotron");
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h5 className="display-6">Are you a Book Worm? Discover the Universe of Books!</h5>
                        <p>Googly Bookworm, uses Google Books API to perform full-text searches and retrieve book information. You can save your favorite books and manage your personal bookshelves.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;