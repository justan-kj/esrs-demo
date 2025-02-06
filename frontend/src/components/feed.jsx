import { React, useState, useEffect } from "react";
import { getPosts } from "../api/postApi";
import Card from "react-bootstrap/Card";

const FeedCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card className="my-4" key={post.id}>
          <Card.Body>
            <Card.Title>{post.userId}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FeedCards;
