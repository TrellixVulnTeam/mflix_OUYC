import React from "react";
import { Row, Col, Container } from "react-bootstrap";


export class MovieView extends React.Component {
  render() {
    const { movie, OnClickBack } = this.props;

    return (
      <Container>
      <div className="movie-view">
        <Row>
          <Col xs={12} md={6}>
        <div className="movie-poster">
          <img src="data:image/jpeg;base64,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" />
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        </Col>
        </Row>
         <Row>
           <Col>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre}</span>
        </div>
        </Col>
        </Row>

        <Row>
          <Col>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director}</span>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
        <button onClick={() => { OnClickBack(null); }}>Back</button>
        </Col>
      </Row>
      </div>
      </Container>
    );
  }
}
