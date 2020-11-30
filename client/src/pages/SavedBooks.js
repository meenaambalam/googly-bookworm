import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import BookCard from "../components/BookCard/BookCard";
import "../index.css";

// "SavedBooks" page route
function SavedBooks() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    // Function to call the API route that gets the saved books from the MongoDB and set the useState
    function loadBooks()
    {
        API.getAllBooks()
        .then(res => {
            setSavedBooks(res.data);
        })
        .catch(err => console.log(err));
    }

    // Components rendered in this page
    return (
        <>
            <Container>
                <Row className="show-grid">
                    <Col xs={6} lg={12}>
                        <h6><span className="spanHeading">Saved Results:</span></h6>
                    </Col>
                    {savedBooks.length ? (
                        savedBooks.map(book => (
                            <BookCard
                                id={book._id}
                                key={book._id}
                                title={book.title}
                                author={book.author}
                                description={book.description}
                                image={book.image}
                                infoLink={book.infoLink}
                                buttonName="DELETE"
                                functionPropLoadBook={loadBooks}
                            />
                        ))
                    ) : (
                            <h3> No results to Display</h3>
                        )}
                </Row>
            </Container>
        </>
    );
}

export default SavedBooks;