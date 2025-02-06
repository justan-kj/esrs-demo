import React from "react";
import "../bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./profileCard.css";

const ProfileCards = () => {
  return (
    <div className="container">
      <div className="card profile-card-2">
        <div className="card-img-block">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80"
            alt="Card"
          />
        </div>
        <div className="card-body pt-5">
          <img
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="profile"
            className="profile"
          />
          <h5 className="card-title">Jack Hunt</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="icon-block">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
