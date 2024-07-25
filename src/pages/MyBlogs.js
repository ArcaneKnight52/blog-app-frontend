import React from 'react';
import { Link } from 'react-router-dom';

const MyBlogs = () => {
  // Dummy blog data for illustration
  const blogs = [
    { id: '1', title: 'Blog 1', content: 'Content for blog 1' },
    { id: '2', title: 'Blog 2', content: 'Content for blog 2' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Blogs</h1>
      <Link to="/new" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
        Create New Blog
      </Link>
      {blogs.map(blog => (
        <div key={blog.id} className="border p-4 mb-2">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          <Link to={`/blogs/${blog.id}`} className="bg-yellow-500 text-white p-2 rounded mr-2">
            View
          </Link>
          {/* Add edit and delete functionality as needed */}
        </div>
      ))}
    </div>
  );
};

export default MyBlogs;
