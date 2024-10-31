import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

// Make sure to add the font import in your index.html or in your main CSS file
// <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">

const HomeNavbar = () => {
  return (
    <div className="h-20 bg-[#F5F5F5] text-black">
      <div className="flex items-center justify-between px-12 py-4 border-b border-b-[rgba(1,1,1,.2)]">
        <div>
          <p className="text-2xl font-bold">
            know
            <span className='text-[#E74B7E]'>shyxmz</span>
          </p>
        </div>
        <ul className="flex items-center gap-10 [&>*]:text-[#1a253b] font-bold  font-josefin-sans">
          <li className="hover:text-orange-500 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Blog
          </li>
          <li className="hover:text-orange-500 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Projects
          </li>
          <li className="hover:text-orange-500 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            About
          </li>
          <li className="hover:text-orange-500 hover:underline hover:underline-offset-4 transition-all duration-300 cursor-none">
            Contacts
          </li>
        </ul>
        <div className="flex items-center gap-10">
          <button className="px-4 py-2 bg-[#F5F5F5] text-[#1a253b] rounded hover:bg-[#e2e2e2] transition-colors duration-300 cursor-none">
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