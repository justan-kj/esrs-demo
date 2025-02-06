import React from "react";
import FeedCards from "./feed";
import ProfileCards from "./profileCard";

const UserHomePage = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <ProfileCards />
        </div>
        <div className="col-md-6">
          <FeedCards />
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
