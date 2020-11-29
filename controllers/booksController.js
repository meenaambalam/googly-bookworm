const db = require("../models/index.js");

//Defining methods for the booksController

module.exports = {
    create: function(req,res){
        console.log("booksController: ", req.body);
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({ date : -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        console.log("bookController remove: ", req.params.id);
        db.Book
        .findById({ _id:req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}