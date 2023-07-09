import React from 'react';
import './Profile.css';


export interface ProfileProps {
    name: string;
    age: number;
    gender: string;
    hobbies: string[];
    social: string;
    displayPhoto: string;
  }

  const Profile: React.FC<ProfileProps> = ({ name, age, gender, hobbies, social}) => {
    return (
      <div className="profile-card">
        <div className = "displaycontainer">
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt="Profile Display" />
        </div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Hobbies: {hobbies.join(', ')}</p>
        <p>Social Media: {social}</p>
      </div>
    );
  };

  export default Profile;
