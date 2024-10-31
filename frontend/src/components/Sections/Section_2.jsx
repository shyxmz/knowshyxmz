import React from 'react';

const Section_2 = () => {
  return (
    <section className='section-2 h-screen'>
      <div className='h-full flex [&>*]:flex-1 items-center'>
        <div className='flex items-center justify-center'>
          <div className='w-[400px] [&>*]:w-48 [&>*]:h-48 flex flex-wrap items-center justify-center overflow-hidden'>
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
        <div className='relative'>
          <div className="text-content_s2 w-96  gap-8">
            <h1 className='leading-normal text-[#1a253b] text-6xl font-bold'>
              Tools
            </h1>
            {/* Removed absolute positioning and used margin-top */}
            <div className='mt-8'>
              <h3 className='text-gray-400 text-xl font-bold'>Tech Stack</h3>
            </div>
            {/* Increased gap between columns */}
            <div className='flex gap-12 mb-8 mt-4'>
              <p className='text-gray-500 leading-8 text-sm'>
                React.js <br/> Tailwind CSS <br/> GSAP <br/> Framer Motion <br/> Three.js
              </p>
              <p className='text-gray-500 leading-8 text-sm'>
                Node.js <br/> Express.js <br/> MongoDB <br/> Nest.js <br/> MySQL 
              </p>
              <p className='text-gray-500 leading-8 text-sm'>
                C <br/> C++ <br/> Javascript <br/> Java <br/> Python
              </p>
            </div>
            <button className='btn h-[60px] w-full text-lg font-semibold'>
              Exploring...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_2;
