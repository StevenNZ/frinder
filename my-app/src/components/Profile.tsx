import React from 'react';

export interface ProfileProps {
    name: string;
    age: number;
    gender: string;
    hobbies: string[];
    social: string;
    displayPhoto: string;
  }
  
  const Profile: React.FC<ProfileProps> = ({ name, age, gender, hobbies, displayPhoto, social }) => {
    return (
      <div className="profile-card">
        <img src={displayPhoto} alt="Profile Display" />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Hobbies: {hobbies.join(', ')}</p>
        <p>Social Media: {social}</p>
      </div>
    );
  };

  export default Profile;
