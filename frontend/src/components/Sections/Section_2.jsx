import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaJava
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiGreensock, 
  SiFramer,
  SiThreedotjs,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiMysql,
  SiCplusplus,
  SiJavascript,
  SiC
} from 'react-icons/si';
import Button from '../Buttons/Section_2_button'; // Import the Button component

const Section_2 = () => {
  return (
    <section className='section-2 h-screen'>
      <div className='h-full flex [&>*]:flex-1 items-center'>
        <div className='flex items-center justify-center'>
          <div className='w-[450px] [&>*]:w-48 [&>*]:h-48 flex flex-wrap items-center justify-center overflow-hidden'>
            <div></div>
            <div className="boxs boxs-1 bg-[#54c6ff]">
              <p>Frontend Dev</p>
              <p className="num">01</p>
            </div>
            <div className="boxs boxs-2 bg-[#316bf4]">
              <p>UI/UX Design</p>
              <p className="num">02</p>
            </div>
            <div className="boxs boxs-3 bg-[#E74B7E]">
              <p>Backend Dev</p>
              <p className="num">03</p>
            </div>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          {/* Adjust the width here to increase the space without impacting the icons */}
          <div className="text-content_s2 w-[500px] gap-8"> 
            <h1 className='leading-normal text-[#1a253b] text-6xl font-bold'>
              Tools
            </h1>
            <div className='mt-8'>
              <h3 className='sm_text text-gray-400 text-xl font-bold'>Tech Stack</h3>
            </div>
            <div className='flex gap-12 mb-8 mt-4'>

              {/* Frontend Stack */}
              <div className='text-gray-500 text-sm'>
                <h3 className='text-lg font-semibold text-gray-400 mb-4 px-2'>Frontend</h3>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <FaReact className="w-4 h-4 text-[#61DAFB]" /> React.js
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> Tailwind CSS
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiGreensock className="w-4 h-4 text-[#88CE02]" /> GSAP
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiFramer className="w-4 h-4 text-black" /> Framer Motion
                </div>
                <div className='flex items-center gap-2 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiThreedotjs className="w-4 h-4 text-black" /> Three.js
                </div>
              </div>
              
              {/* Backend Stack */}
              <div className='text-gray-500 text-sm'>
                <h3 className='text-lg font-semibold text-gray-400 mb-4 px-2'>Backend</h3>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <FaNodeJs className="w-4 h-4 text-[#339933]" /> Node.js
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiExpress className="w-4 h-4 text-black" /> Express.js
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiMongodb className="w-4 h-4 text-[#47A248]" /> MongoDB
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiNestjs className="w-4 h-4 text-[#E0234E]" /> Nest.js
                </div>
                <div className='flex items-center gap-2 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiMysql className="w-4 h-4 text-[#4479A1]" /> MySQL
                </div>
              </div>
              
              {/* Programming Languages */}
              <div className='text-gray-500 text-sm'>
                <h3 className='text-lg font-semibold text-gray-400 mb-4 px-2'>Languages</h3>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiC className="w-4 h-4 text-[#A8B9CC]" /> C
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiCplusplus className="w-4 h-4 text-[#00599C]" /> C++
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> Javascript
                </div>
                <div className='flex items-center gap-2 mb-3 transition-transform duration-300 hover:scale-110 px-2'>
                  <FaJava className="w-4 h-4 text-[#007396]" /> Java
                </div>
                <div className='flex items-center gap-2 transition-transform duration-300 hover:scale-110 px-2'>
                  <FaPython className="w-4 h-4 text-[#3776AB]" /> Python
                </div>
              </div>
            </div>
            <Button /> {/* Replace Exploring button with the new Button component */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_2;
