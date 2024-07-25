import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-indigo-800 text-white flex flex-col h-screen shadow-lg">
      <div className="bg-indigo-900 p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold cursor-pointer select-none hover:text-blue-500">
            DEATH NOTE
          </h1>
        </div>
      </div>
      <span className="w-full h-px bg-white"></span>

      <div className="mt-auto p-2">
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isProfileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mb-2">
            <div className="mt-2 p-2 border-2 rounded-lg">
              <Link to="/" className="block p-2 hover:bg-indigo-700">
                Home
              </Link>
              <Link to="/my-blogs" className="block p-2 hover:bg-indigo-700">
                My Blogs
              </Link>
              <Link to="/settings" className="block p-2 hover:bg-indigo-700">
                Settings
              </Link>
              <Link to="/about" className="block p-2 hover:bg-indigo-700">
                About
              </Link>
              <Link to="/contact" className="block p-2 hover:bg-indigo-700">
                Contact
              </Link>
            </div>
            <span className="w-full h-px bg-white"></span>
          </div>
        </div>

        <div
          className="flex gap-2 items-center cursor-pointer select-none hover:text-blue-500 p-2 rounded-lg border-2 border-gray-300"
          onClick={toggleProfile}
        >
          <FaRegUserCircle className="text-2xl" />
          <h1 className="text-2xl font-bold">PROFILE</h1>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
