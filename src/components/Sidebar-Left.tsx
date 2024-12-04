"use client";

import { FiMenu } from "react-icons/fi";
import { FaHome, FaCog, FaUsers } from "react-icons/fa";

import { SidebarProps } from "../../types";

const Sidebar_Left: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  closeSidebar, // use jab jhud manually close karne ka feature lagana ho
}) => {
  return (
    <div
      className={`sidebar fixed top-0 left-0 h-full bg-zinc-800 text-white flex flex-col shadow-lg transition-all duration-300 ease-out ${
        isOpen ? "w-64" : "w-16"
      } z-50`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 bg-gray-700 p-2 rounded-md"
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar Items */}
      <div className="mt-12 flex flex-col space-y-4">
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-700 cursor-pointer">
          <FaHome size={20} />
          <span
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Home
          </span>
        </div>
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-700 cursor-pointer">
          <FaUsers size={20} />
          <span
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Users
          </span>
        </div>
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-700 cursor-pointer">
          <FaCog size={20} />
          <span
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_Left;
