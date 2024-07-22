import { Link } from 'react-router-dom';
import { useState } from 'react';

const SidebarItem = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="block p-4 hover:bg-purple-600 text-white rounded transition duration-200"
    >
      {label}
    </Link>
  </li>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className={`h-screen ${isOpen ? 'w-56' : 'w-16'} overflow-hidden transition-width duration-150 bg-indigo-800 text-white flex flex-col shadow-lg`}>
      <div className="flex justify-between items-center p-4 bg-indigo-900">
        {isOpen && <h1 className="text-2xl font-bold">Sidebar</h1>}
        <button
          onClick={toggleSidebar}
          className="text-white"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-2">
          <SidebarItem to="/" label="Home" />
          <SidebarItem to="/profile" label="Profile" />
          <SidebarItem to="/my-blogs" label="My Blogs" />
          <SidebarItem to="/settings" label="Settings" />
          <SidebarItem to="/about" label="About" />
          <SidebarItem to="/contact" label="Contact" />
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
