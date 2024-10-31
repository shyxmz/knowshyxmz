import React from 'react';
import bg1 from "../../assets/bg1.png";
import img1 from "../../assets/mobile.png";
import img2 from "../../assets/flat.jpg";

const Section_4 = () => {
  return (
    <section className='section-4 h-screen'>
      <div className='h-full [&>*]:flex-1 flex'>
        <div className='flex items-center justify-center'>
          <div className='h-[500px] w-[400px] flex flex-col gap-4'>
            <div
              className='bg-4 h-[400px] p-10 flex flex-col gap-4'
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className='txt-1 flex flex-col gap-4'>
                <h1 className='text-xl text-white px-2'>Blogs</h1> {/* Updated text to "Blogs" */}
                <p className='w-72 text-sm leading-6 text-gray-200 px-2'>
                  Read my blogs. My blogs sit here. {/* Updated paragraph text */}
                </p>
              </div>
              <div className='self-end translate-x-20 translate-y-20 flex flex-col gap-4'>
                <img
                  className='img_1 w-64 h-48'
                  src={img1} alt="" 
                />
                <div className='txt-2'>
                  <h4 className='font-bold'>Lorem ipsum dolor sit amet</h4>
                  <p className='text w-52'>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center'> 
          <div className='h-[500px] w-[400px] flex flex-col justify-center'> 
            <div className='flex flex-col gap-[5rem] p-10'> 
              <h1 className='txt-3 text-8xl text-[#1a253b] font-bold'>Blogs</h1> {/* Updated text to "Blogs" */}
              <div className='flex flex-col gap-4'>
                <img
                  className='img_2 w-96 h-48' 
                  src={img2} alt="" 
                />
                <div className='txt-4'>
                  <h4 className='font-bold'>Exlorem, ipsum dolor</h4>
                  <p className='text w-52'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_4;
