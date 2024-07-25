import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [isEditing, setIsEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(newProfile);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={newProfile.name}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={newProfile.email}
              onChange={handleChange}
              className="border p-2 mb-4 w-full"
              placeholder="Email"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg mb-2">Name: {profile.name}</p>
            <p className="text-lg mb-4">Email: {profile.email}</p>
            <button onClick={handleEdit} className="bg-yellow-500 text-white p-2 rounded">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
