import React from "react";
import Card from "react-bootstrap/Card";

import "../bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./profileCard.css";

const ProfileCards = () => {
  return (
    <Card>
      <div className="card profile-card-2">
        <div className="card-img-block">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80"
            alt="Card"
          />
        </div>
        <Card.Body>
          <img
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="profile"
            className="profile"
          />
          <div className="mt-3">
            <h5>Jack Hunt</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate laborum non quod.
            </p>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProfileCards;
