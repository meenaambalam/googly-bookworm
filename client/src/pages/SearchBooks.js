import React, { useState } from "react";
import { Container, Row, Col, Button, List, ListItem } from "react-bootstrap";
import API from "../utils/API";
import BookCard from "../components/BookCard/BookCard";

function SearchBooks() {

    const [books, setBooks] = useState([]);
    const [formSearch, setFormSearch] = useState({});
    // let pageLoad = false;

    // useEffect(() => {
    //         pageLoad = true;
    // }, [])

    // function loadBooks(){
    //     API.getBooks()
    //     .then(res => 
    //         setBooks(res.data)
    //     )
    //     .catch(err => console.log(err));
    // }

    function searchGoogleBooksAPI(query) {
        API.search(query)
            .then(res => {
                console.log("API - Results:", res.data.items)
                setBooks(res.data.items);
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormSearch({ ...formSearch, [name]: value })

    };

    function handleSearch(event) {
        event.preventDefault();
        if (formSearch) {
            console.log("handleSerach Event: ", event);
            console.log("handleSearch: ", formSearch.search);
            searchGoogleBooksAPI(formSearch.search);
        }

    }


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
                        <h6>Search Results:</h6>
                    </Col>
                    {books.length ? (
                        books.map(book => (
                            <BookCard
                                id={book.id}
                                key={book.id}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors} //.join()
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                infoLink={book.volumeInfo.infoLink}
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

export default SearchBooks;