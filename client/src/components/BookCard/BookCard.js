import React from "react";
import API from "../../utils/API";
import "./BookCard.css";


function BookCard(props) {

    function operationOnBook(bookData) {
        if (bookData.buttonName === "SAVE") {
            console.log("saveBook called from BookCArd: ", bookData);
            API.saveBook({
                bookId: bookData.bookId,
                title: bookData.title,
                author: bookData.author,
                image: bookData.image,
                description: bookData.description,
                infoLink: bookData.infoLink
            })
                .then(res => {
                    console.log("Book Saved! ", res);
                    alert("Book Saved");
                })
                .catch(err => console.log(err));
        } else if( bookData.buttonName === "DELETE") {
            console.log("deleteBook called from BookCArd: bookData ", bookData);
            console.log("deleteBook called from BookCArd: ", bookData.id);
            API.deleteBook(bookData.id)
                .then(res => {
                    console.log("Book Deleted! ", res);
                    alert("Book Deleted from the list!");
                    props.functionPropLoadBook();
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="card-deck">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-header ml-auto">
                                <a className="btn btn-warning" target="_blank" rel="noreferrer" href={props.infoLink}>VIEW</a>
                                <button className="btn btn-warning save" onClick={() => operationOnBook(props)}>{props.buttonName}</button>
                            </div>
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img src={props.image} alt={props.title} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Title: {props.title}</h4>
                                    <h4 className="card-title">Author: {props.author}</h4>
                                    <p className="card-text">{props.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
