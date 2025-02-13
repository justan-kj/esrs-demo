import { React, useState, useEffect } from "react";
import { getPosts } from "../api/postApi";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const FeedCards = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (err) {
        setError("Failed to load posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) : (
        posts.map((post) => (
          <Card className="mb-4 shadow border-0" key={post.id}>
            <Card.Title className="">
              <div className="row m-3 align-items-center text-start">
                <Image
                  style={{ height: "48px", width: "48px" }}
                  className="col-md-3 p-0"
                  roundedCircle
                  fluid
                  src={
                    post.icon ||
                    "https://avatar.oxro.io/avatar.svg?name=" +
                      post.user.name +
                      "&background=random"
                  }
                  alt={post.userId + " Icon"}
                ></Image>
                <h5 className="col-md-9">{post.user.name}</h5>
              </div>
            </Card.Title>
            <Card.Body className=" p-4 pt-1">
              <Card.Text className="text-start fs-6 fw-normal">
                {post.content}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default FeedCards;
