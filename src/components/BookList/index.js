import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  // thumbnail = "https://placehold.it/300x300",
  thumbnail,
  title,
  authors,
  description,
  href,
  saveBook,
  bookid
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>Author(s): {authors}</h4>
            <h3>
              <a rel="noreferrer noopener" target="_blank" href={href}>
              Link to the book!
              </a>
            </h3>
            <div>
              {/* <a className="btn btn-primary btn-lg" href="#" role="button" id="${buttonid}">Save this book</a> */}
              <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => saveBook(bookid)}>
                Save this book
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}