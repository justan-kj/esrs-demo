import { React, useState, useEffect } from "react";
//import { getFriends } from "../api/friendsApi";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      //const response = await getFriends();
      const response = [
        {
          id: 1,
          icon: "",
          name: "Ian Dooley",
        },
        {
          id: 2,
          icon: "",
          name: "Joseph Gonzalez",
        },
      ];
      setFriends(response);
    };
    fetchFriends();
  }, []);

  return (
    <div>
      <h2 className="mb-3">Friends</h2>
      {friends.map((friend) => (
        <Card className="mb-2 shadow-sm border-0 " key={friend.id}>
          <Card.Body>
            <div className="row m-1 align-items-center text-start">
              <Image
                style={{ height: "48px", width: "48px" }}
                className="col-md-3 p-0"
                roundedCircle
                fluid
                src={
                  friend.icon ||
                  "https://avatar.oxro.io/avatar.svg?name=" +
                    friend.name +
                    "&background=random"
                }
                alt={friend.userId + " Icon"}
              ></Image>
              <h5 className="col-md-9">{friend.name}</h5>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
