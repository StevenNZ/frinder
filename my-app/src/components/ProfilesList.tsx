import React from 'react';
import Profile, { ProfileProps } from './Profile';

interface ProfilesListProps {
  profiles: ProfileProps[];
}

const ProfilesList: React.FC<ProfilesListProps> = ({ profiles }) => {
  return (
    <div className="profiles-list">
      {profiles.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfilesList;
