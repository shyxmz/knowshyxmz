import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

const HomeNavbar = () => {
  return (
    <div className="h-20 bg-[#F5F5F5] text-black">
      <div className="flex items-center justify-between px-12 py-4">
        <div>
          <p className="text-2xl font-bold">Lorem</p>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Blog
          </li>
          <li className="hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Projects
          </li>
          <li className="hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            About
          </li>
          <li className="hover:text-blue-600 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Contacts
          </li>
        </ul>
        <div className="flex items-center space-x-6">
          <button className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-blue-700 transition-colors duration-300 cursor-none">
            Sign Up
          </button>
          <div aria-label="Shopping Bag" className="text-2xl cursor-none">
            <MdOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
