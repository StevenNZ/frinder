import React from 'react';
import ProfilesList from './components/ProfilesList';

const App: React.FC = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 25,
      gender: 'Male',
      hobbies: ['Reading', 'Running', 'Cooking'],
      displayPhoto: 'profile1.jpg',
      social: "john_doe"
    },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="scroll-container">
        <ProfilesList profiles={profiles} />
      </div>
    </div>
  );
};

export default App;
