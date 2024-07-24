import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className=" bg-indigo-800 text-white flex flex-col shadow-lg">
      <div className="flex justify-between p-4 bg-indigo-900 flex-grow">
        <h1 className="text-2xl font-bold cursor-pointer select-none hover:text-blue-500">
          DEATH NOTE
        </h1>
      </div>
      <span className="w-1/2 h-1/7 bg-white"></span>
      <div className="p-4 flex flex-column gap-2 cursor-pointer select-none hover:text-blue-500 ">
        <p className="text-2xl p-1">
          <FaRegUserCircle />
        </p>
        <h1 className="text-2xl font-bold">PROFILE</h1>
      </div>
    </nav>
  );
};

export default Sidebar;
