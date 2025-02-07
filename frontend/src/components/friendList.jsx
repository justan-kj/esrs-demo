import { React, useState, useEffect } from "react";
//import { getFriends } from "../api/friendsApi";
import Card from "react-bootstrap/Card";


const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      //const response = await getFriends();
      const response = []
      setFriends(response);
    };
    fetchFriends();
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Card className="mb-4" key={friend.id}>
          <Card.Body>
            <Card.Title className="text-start h7 p-3">{friend.icon}</Card.Title>
            <Card.Text className="text-start h6">{friend.name}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
