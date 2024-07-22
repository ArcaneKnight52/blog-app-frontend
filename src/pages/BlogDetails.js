import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = storedBlogs.find(b => b.id === parseInt(id));
    setBlog(blog);
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.map(b => b.id === parseInt(id) ? blog : b);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog(prevBlog => ({ ...prevBlog, [name]: value }));
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default BlogDetails;
