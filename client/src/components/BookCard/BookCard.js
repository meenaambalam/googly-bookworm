import React from "react";
import API from "../../utils/API";
import "./BookCard.css";


function BookCard(props) {

    function saveBook(bookData){
        console.log("saveBook called from BookCArd: ", bookData);
        // await API.saveBook({
        //     id: bookData.id,
        //     title: bookData.title,
        //     author: bookData.author,
        //     image: bookData.image,
        //     description: bookData.description,
        //     infoLink: bookData.infoLink
        // })
        // .then(res => console.log("Book Saved! ", res))
        // .catch(err => console.log(err));
        // description: bookData.description,
        API.saveBook({
            id: bookData.id,
            title: bookData.title,
            author: bookData.author,
            image: bookData.image,
            description: bookData.description,
            infoLink: bookData.infoLink
        })
        .then(res => console.log("Book Saved! ", res))
        .catch(err => console.log(err));
    }

    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                        <div className="card-header ml-auto">
                                    <a className="btn btn-warning" target="_blank" rel="noreferrer" href={props.infoLink}>VIEW</a>
                                    <button className="btn btn-warning save" onClick={() => saveBook(props)}>SAVE</button>
                                    {/* <button className="btn btn-warning save" onClick={() => {props.buttonFunction}}>{buttonName}</button> */}
                            </div>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img src={props.image} alt={props.title}/>
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
