import { React, useState, useEffect } from "react";
import { getPosts } from "../api/postApi";
import Card from "react-bootstrap/Card";

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
          <Card className="mb-4" key={post.id}>
            <Card.Body>
              <Card.Title className="text-start h6">{post.userId}</Card.Title>
              <Card.Text className="text-start h7 p-3">
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
