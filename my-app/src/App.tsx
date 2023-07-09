import React from 'react';
import Navbar from './components/Navbar';
import ProfilesList from './components/ProfilesList';


const App: React.FC = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 25,
      gender: 'Male',
      hobbies: ['Running', 'Cooking'],
      displayPhoto: 'download.png',
      social: "@john_doe"
    },
    {
      name: 'Amy Smith',
      age: 22,
      gender: 'Female',
      hobbies: ['Yoga', 'Reading'],
      displayPhoto: 'download.png',
      social: "@amysmith_"

    },
    {
      name: 'Jason Chang',
      age: 24,
      gender: 'Male',
      hobbies: ['Gaming', 'Music'],
      displayPhoto: 'download.png',
      social: "@imjason_chang"

    },
    {
      name: 'Betty Lin',
      age: 21,
      gender: 'Female',
      hobbies: ['Reading', 'Yoga'],
      displayPhoto: 'download.png',
      social: "@betty_lin"

    }
  ];

  return (
    <div className="app">
      <Navbar/>
      <h1>User Profiles</h1>
      <div className="scroll-container">
        <ProfilesList profiles={profiles} />
      </div>
    </div>
  );
};

export default App;

