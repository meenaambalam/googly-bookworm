import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import BookCard from "../components/BookCard/BookCard";
import "../index.css";

// "SearchBooks" Page Route
function SearchBooks() {

    const [books, setBooks] = useState([]);
    const [formSearch, setFormSearch] = useState({});

    // Invokes the Client API "searchbook" request
    function searchGoogleBooksAPI(query) {
        API.searchBook(query)
            .then(res => {
                console.log("API - Results:", res.data.items)
                setBooks(res.data.items);
            })
            .catch(err => console.log(err));
    }


    // Handle Input change event of the Search string "input" element
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormSearch({ ...formSearch, [name]: value })

    };

    // "Search" onclick event handler
    function handleSearch(event) {
        event.preventDefault();
        if (formSearch) {
            searchGoogleBooksAPI(formSearch.search);
        }

    }

    // renders the following jsx
    return (
        <>
            <Container>
                <Row className="show-grid">
                    <Col xs={12} lg={12} className="text-center">
                        <form>
                            <input
                                className="searchTxt"
                                name="search"
                                placeholder="Book Title (required)"
                                onChange={handleInputChange}
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSearch}>
                                Search
                            </Button>
                        </form>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} lg={12}>
                        <span className="spanHeading"><h6>Search Results:</h6></span>
                    </Col>
                    {books.length ? (
                        books.map(book => (
                            <BookCard
                                bookId={book.id}
                                key={book.id}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors ? book.volumeInfo.authors.join() : ""}
                                description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                infoLink={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}
                                buttonName="SAVE"
                            />
                        ))
                    ) : (
                            <span className="spanHeading"><h3> No results to Display</h3></span>
                        )}
                </Row>
            </Container>
        </>
    );
}

export default SearchBooks;