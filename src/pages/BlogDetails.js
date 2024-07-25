import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  // Fetch the blog details using the id (dummy data for now)
  // You might integrate with a backend to fetch real data
  const blog = { title: 'Sample Blog', content: 'This is a sample blog content.' };

  return (
    <div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
