  
import axios from "axios";

export default {
  getBooks: function(query) {
    console.log(query);
    return axios.get("https://www.googleapis.com/books/v1/volumes/?", { params: { q: query } });
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("inside saveBook function");
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};