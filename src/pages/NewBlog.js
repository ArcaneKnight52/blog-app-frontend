import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      content,
    };
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([...storedBlogs, newBlog]));
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Create New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
