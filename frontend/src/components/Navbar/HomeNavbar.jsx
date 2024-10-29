import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

const HomeNavbar = () => {
  return (
    <div className="h-20 bg-[#F5F5F5] text-black">
      <div className="flex items-center justify-between px-12 py-4">
        <div>
          <p className="text-2xl font-bold">Bingo</p>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Strategy</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Client</li>
        </ul>
        <div className="flex items-center space-x-6">
          <button className="px-4 py-2 bg-sky-400 text-white rounded hover:bg-blue-500">Sign Up</button>
          <div aria-label="Shopping Bag" className="text-2xl cursor-pointer">
            <MdOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
