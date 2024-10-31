import React from 'react';
import { MdOutlineArticle } from "react-icons/md"; // Importing a blog icon

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
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold">Portfolio</h1> {/* Centered Portfolio */}
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] text-[#1a253b] rounded hover:bg-[#e2e2e2] transition-colors duration-300 cursor-pointer">
            <MdOutlineArticle /> {/* Blog icon inside the button */}
            Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
