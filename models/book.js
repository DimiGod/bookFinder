const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  // title: String,
    bookid:{
      type: String,
      unique: true
  },
    title:{
      type: String
  },
    authors:[]
  ,
    description:{
      type: String
  },
    thumbnail:{
      type: String
  },
    href:{
      type: String
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;