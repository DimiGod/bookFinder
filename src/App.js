import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    // console.log(this.state.bookSearch);
    API.getBooks(this.state.bookSearch)
       .then(res => this.setState({ books: res.data.items }))
       .catch(err => console.log(err));
  };

  saveBook = (id) => {
    // console.log("id" + id);
    if (this.state.books.indexOf(id) === -1){
      console.log("if1 " + id);
      console.log(this.state.books.indexOf(id));
      console.log(this.state.books[0]);
      
      // app.post("/savebook", this.state.books[0]);
      API.saveBook(this.state.books[0])
         .then(console.log("Done with save book call"))
         .catch(err => console.log(err));
    }
    else{
      console.log("else " + id);
    }
  };


  // API.saveBook({
  //   title: this.state.title,
  //   author: this.state.author,
  //   synopsis: this.state.synopsis
  // })
  //   .then(res => this.loadBooks())
  //   .catch(err => console.log(err));



  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}           
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        href={book.volumeInfo.infoLink}
                        saveBook={this.saveBook}
                        bookid={book.id}
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
