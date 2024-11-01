import React from 'react';

const Button = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Instagram Button */}
      <div className="social-button">
        <button className="relative w-12 h-12 rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
              {/* SVG Path for Instagram Icon */}
              <path className="group-hover:fill-[#171543] fill-white duration-300" d="..."/>
            </svg>
          </div>
        </button>
      </div>

      {/* GitHub Button */}
      <div className="social-button">
        <button className="relative w-12 h-12 rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path for GitHub Icon */}
              <path className="group-hover:fill-[#171543] fill-white duration-300" d="..."/>
            </svg>
          </div>
        </button>
      </div>

      {/* LinkedIn Button */}
      <div className="social-button">
        <button className="relative w-12 h-12 rounded-full group">
          <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl" />
          <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
            <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* SVG Path for LinkedIn Icon */}
              <path className="group-hover:fill-[#171543] fill-white duration-300" d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,1.2-0.9h0.1c0.8,0,1.2,0.4,1.2,0.9v0.1C8.5,8.6,8.1,9,7.3,9z M18,19h-2.5v-4.6c0-1.1-0.4-1.9-1.3-1.9c-0.7,0-1.1,0.5-1.3,1v5.5H10V10h2.4v1.2c0.3-0.6,1-1.5,2.4-1.5c1.7,0,3,1.1,3,3.6V19z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Button;
