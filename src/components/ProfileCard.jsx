import React from "react";
import "./ProfileCard.css"; // Create this CSS file for styles

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="header-gradient">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHK8GeosT95UQ/profile-displayphoto-shrink_800_800/B4EZWk0ouZGwAg-/0/1742227017919?e=1750896000&v=beta&t=dSA-5seR9K9X9muxWbpKEwhu231N6cvxcZZE03WF4fw" // Replace with actual profile image URL
          alt="Profile"
          className="profile-img"
        />
      </div>
      <h2 className="name">Pradhiksha</h2>
      <p className="location">Tamil Nadu,INDIA</p>
      <p className="designation">Web Producer - Web Specialist</p>
      <p className="university">Karunya University - Coimbatore</p>
      <div className="stats">
        <div className="stat">
          <span className="number">65</span>
          <span className="label">Friends</span>
        </div>
        <div className="stat">
          <span className="number">43</span>
          <span className="label">Photos</span>
        </div>
        <div className="stat">
          <span className="number">21</span>
          <span className="label">Comments</span>
          </div>
      </div>
      <button className="show-more-btn">Show more</button>
    </div>
  );
};
export default ProfileCard;