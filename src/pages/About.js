import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-4">DEATH NOTE is a blog management tool designed to make it easy for you to create, edit, and manage your blog posts. Our goal is to provide a user-friendly interface that simplifies the blogging process.</p>
        <h2 className="text-xl font-semibold mb-2">Our Team:</h2>
        <ul className="list-disc list-inside">
          <li>Jane Doe - Lead Developer</li>
          <li>John Smith - UX Designer</li>
          <li>Mary Johnson - Product Manager</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
