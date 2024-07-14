import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
    return (
      <div className={`h-screen ${isOpen ? 'w-56' : 'w-0'} overflow-hidden transition-width duration-150 bg-gray-800 text-white flex flex-col`}>
      <div className="flex justify-between items-center p-4">
        {isOpen && <h1 className="text-2xl font-bold">Sidebar</h1>}
        <button onClick={toggleSidebar} className="text-white ">
          {isOpen ? '✖' : '☰'} 
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-2">
  <li>
    <Link 
      to="/" 
      className="block p-4  hover:bg-gray-600 text-white rounded transition duration-200">
      Home
    </Link>
  </li>
  <li>
    <Link 
      to="/settings" 
      className="block p-4  hover:bg-gray-600 text-white rounded transition duration-200">
      Settings
    </Link>
  </li>
  <li>
    <Link 
      to="/profile" 
      className="block p-4  hover:bg-gray-600 text-white rounded transition duration-300">
      Profile
    </Link>
  </li>
</ul>

      )}
      {!isOpen && (
        <button 
          onClick={toggleSidebar} 
          className="fixed h-10 pt-2 bg-gray-800 text-white p-2 rounded shadow">
          ☰
        </button>
      )}
    </div>
    );
  };
  
  export default Sidebar;