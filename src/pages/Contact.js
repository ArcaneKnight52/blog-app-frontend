import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or save to a database)
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 mb-4 w-full"
            placeholder="Your message"
            rows="4"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
