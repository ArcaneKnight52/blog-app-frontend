import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Go to Home
        </Link>
      </div>
  );
};

export default NotFound;
