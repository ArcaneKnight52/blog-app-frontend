import { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Fetch profile from local storage or mock data
    const storedProfile = JSON.parse(localStorage.getItem('profile')) || { name: 'John Doe', email: 'john@example.com' };
    setProfile(storedProfile);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Profile</h1>
      <p className="text-lg"><strong>Name:</strong> {profile.name}</p>
      <p className="text-lg"><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
