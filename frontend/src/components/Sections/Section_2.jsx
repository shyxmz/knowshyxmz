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
        <div>
          <div className="text-content_s2 w-80 flex flex-col gap-4">
            <h1 className='text-[#1a253b] text-8xl font-bold overflow-hidden'>Frontend dev</h1>
            <div className='h-7 relative top-2 left-1'>
              <h3 className='text-gray-400 text-xl font-bold'>Tech Stack</h3>
            </div>
            <p className='text-gray-500 leading-6 text-sm'>React.js <br/> Tailwind CSS <br/> GSAP <br/> Framer Motion <br/> Three.js</p>
            <button>Exploring more...</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_2;
