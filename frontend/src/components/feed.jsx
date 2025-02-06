import React from "react";
import { getPosts } from "../api/postApi";
import Card from "react-bootstrap/Card";

const FeedCards = () => {
  return (
    <div>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeedCards;
