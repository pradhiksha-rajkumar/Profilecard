import React from 'react';
import './ProfileCard.css'; // Import the CSS file for styling

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://www.google.com/imgres?q=saree%20samantha%20ruth%20prabhu&imgurl=https%3A%2F%2Fimage.tensorartassets.com%2Fcdn-cgi%2Fimage%2Fanim%3Dtrue%2Cplain%3Dfalse%2Cw%3D2048%2Cf%3Djpeg%2Cq%3D85%2Fposts%2Fimages%2F739113204185220792%2F82ea3c8c-0e99-44b0-9dfe-7fbf80428745.png&imgrefurl=https%3A%2F%2Ftensor.art%2Fimages%2F765536216658723085%3Fpost_id%3D765536216654528787&docid=KFkZD-bIXSWLuM&tbnid=vn3UNKreaIipHM&vet=12ahUKEwiou7C7gaCKAxWpzjgGHe6PD1sQM3oECD4QAA..i&w=1024&h=1536&hcb=2&ved=2ahUKEwiou7C7gaCKAxWpzjgGHe6PD1sQM3oECD4QAA"
          alt="Profile"
          className="profile-img"
        />
        <h1 className="profile-name">Samantha Jones</h1>
        <p className="profile-location">New York, United States</p>
      </div>
      <p className="profile-title">
        Web Producer - Web Specialist <br /> Columbia University - New York
      </p>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">65</span>
          <span className="stat-label">Friends</span>
        </div>
        <div className="stat">
          <span className="stat-number">43</span>
          <span className="stat-label">Photos</span>
        </div>
        <div className="stat">
          <span className="stat-number">21</span>
          <span className="stat-label">Comments</span>
        </div>
      </div>
      <button className="profile-btn">Show More</button>
    </div>
  );
};

export default ProfileCard;
