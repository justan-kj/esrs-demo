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
          <Card className="mb-4 shadow-sm border-0" key={post.id}>
            <Card.Body>
              <Card.Title className="text-start h6">
                <div className="mx-0 row">
                  <Image
                    style={{ height: "48px", width: "48px" }}
                    className="p-0"
                    roundedCircle
                    fluid
                    src={
                      post.icon ||
                      "https://avatar.oxro.io/avatar.svg?name=" +
                        post.userId +
                        "&background=random"
                    }
                    alt={post.userId + " Icon"}
                  ></Image>
                  <p className="col-md-9">{post.userId}</p>
                </div>
              </Card.Title>
              <Card.Text className="text-start h7">{post.content}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default FeedCards;
