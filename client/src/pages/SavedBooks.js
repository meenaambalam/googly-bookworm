import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import BookCard from "../components/BookCard/BookCard";


function SavedBooks() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks()
    {
        API.getAllBooks()
        .then(res => {
            console.log("Book Saved Return from DB! ", res.data);
            setSavedBooks(res.data);
            console.log("After Setbooks : ", res.data);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <Container>
                <Row className="show-grid">
                    <Col xs={6} lg={12}>
                        <h6>Saved Results:</h6>
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