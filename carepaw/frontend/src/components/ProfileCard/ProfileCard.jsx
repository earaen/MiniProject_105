import React from "react";
import "./ProfileCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
function ProfileCard() {
  return (
    <div className="container">
      <div className="frame">
        <span className="MYPROFILE">My Profile</span>
        <div className="PHOTO">
          Photo
          <div>
            <FontAwesomeIcon className="icon" icon={faCircleUser} />
          </div>
          <hr />
        </div>
        <div className="INFO">
          <div className="">Personal Info</div>
          <div className="INFOO">
            Username: <span className="username">Earn</span>
          </div>
          <div className="INFOO">
            Email: <span className="email">Earn@gmail.com</span>
          </div>
          <div className="INFOO">
            Password:
            <button className="email">Change Password</button>
          </div>
          <div className="ei">
            <button className="logout">Log Out</button>
            <button className="update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
