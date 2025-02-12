import { React, useState, useEffect } from "react";
//import { getFriends } from "../api/friendsApi";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ianDooley from "../assets/ian-dooley-unsplash.jpg";
import josephGonzalez from "../assets/joseph-gonzalez-unsplash.jpg";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      //const response = await getFriends();
      const response = [
        {
          id: 1,
          icon: ianDooley,
          name: "Ian Dooley",
        },
        {
          id: 2,
          icon: josephGonzalez,
          name: "Joseph Gonzalez",
        },
      ];
      setFriends(response);
    };
    fetchFriends();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Friends</h2>
      {friends.map((friend) => (
        <Card className="mb-4" key={friend.id}>
          <Card.Body>
            <div className="row ">
              <div className="col-md-3 p-0">
                <Image
                  style={{ height: "72px", width: "72px" }}
                  className=""
                  roundedCircle
                  fluid
                  src={friend.icon}
                  alt={friend.name + " Icon"}
                ></Image>
              </div>
              <div className="col text-start p-0 mx-3 ">{friend.name}</div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
