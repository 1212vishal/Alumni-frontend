import React from "react";
import '../../Profile/ProfileCenter/ProfileCenter.css'
import Cover from "../../../../src/img/cover.jpg";

const Vpcenter = ({ user }) => {
  let name = user.name;
  let title = user.title;
  let rollNumber = user.rollNumber;
  let location = user.location;
  let about = user.about;
  let skills = user.skills;

  return (
    <div className="profile-page">
      <div className="ProfilepageCard">
      <div className="ProfilepageImages">
        <img className="profilepage-cover" src={Cover} alt="" />
        <div className="profilePic">
          <img src={user.avatar.url} alt="" />
        </div>
      </div>
      <div className="ProfilepageName">
        <span>{name}</span>
      </div>
      <div className='profilepageCard-options'>
        <div>
            {rollNumber}
        </div>
        <div>
            {title}
        </div>
        <div>
            {location}
        </div>
      </div>
      </div>
        <div className="view-mode">
          <h4>About</h4>
          <p>{about}</p>

          <h4>Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Vpcenter;