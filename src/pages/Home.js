import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to DEATH NOTE</h1>
      <p className="mb-4">Manage your blogs efficiently with our intuitive interface. Explore the features and start creating, viewing, and managing your content.</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside">
          <li>Easy creation of new blogs</li>
          <li>View and edit existing blogs</li>
          <li>Delete blogs with a single click</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
