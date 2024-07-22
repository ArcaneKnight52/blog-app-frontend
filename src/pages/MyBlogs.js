import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from local storage or mock data
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">My Blogs</h1>
      <Link to="/new" className="bg-blue-500 text-white px-4 py-2 rounded">Create New Blog</Link>
      <ul className="mt-6 space-y-4">
        {blogs.map(blog => (
          <li key={blog.id} className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <Link to={`/blogs/${blog.id}`} className="text-2xl text-indigo-700 font-semibold hover:underline">{blog.title}</Link>
            <button onClick={() => deleteBlog(blog.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBlogs;
