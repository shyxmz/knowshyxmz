import React from 'react';
import bg1 from '../../assets/bg1.png';
import Button from '../Buttons/Section_3_button';

const Section_3 = () => {
  return (
    <section className='section-3 h-screen' style={{ backgroundColor: '#F5F5F5' }}>
      <div className='h-full flex items-center justify-center [&>*]:flex-1'>
        <div className='h-full flex items-center justify-center'>
          <div
            className='bg-3 h-[500px] w-[480px] flex items-center'
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className='white-box bg-[#F5F5F5] w-[calc(100%-4.5rem)] h-[calc(100%-9rem)]'>
              <div className="white-box-content h-full flex flex-col gap-4 p-8">
                <h1 className='text-xl font-bold text-[#1a253b]'>Projects</h1>
                <p className='w-72 text'>
                  I am passionate about web-based projects that showcase sleek frontend designs and clean code. Each project reflects my commitment to quality and usability.
                </p>
                <div className='flex gap-6'>
                  <div>
                    <p className='font-bold text-[#1a253b] text-xl'>StartHub</p>
                    <span className='text-gray-600 text-xs font-bold'>Team</span>
                    <div className='h-1 w-8 bg-[#54c6ff] mt-1'></div>
                  </div>
                  <div>
                    <p className='font-bold text-[#1a253b] text-xl'>DeSpace</p>
                    <span className='text-gray-600 text-xs font-bold'>Personal</span>
                    <div className='h-1 w-8 bg-[#316bf4] mt-1'></div>
                  </div>
                  <div>
                    <p className='font-bold text-[#1a253b] text-xl'>MemeSaber</p>
                    <span className='text-gray-600 text-xs font-bold'>Team</span>
                    <div className='h-1 w-8 bg-[#E74B7E] mt-1'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-hidden'>
          <div className="text-content_s3 flex flex-col gap-4 w-80">
            <span className='text-8xl font-bold text-[#1a253b]'>DeSpace</span>
            <p className='text'>
              DeSpace is a website offering real-time satellite data. It uses extensive datasets for accurate information, making it invaluable for researchers and enthusiasts. It also features a data library with numerous astronomy research papers, empowering users to explore the cosmos and collaborate within the scientific community.
            </p>
            <p className='text'>
              With its user-friendly interface, DeSpace makes complex satellite data accessible. Whether a student, researcher, or astronomy enthusiast, DeSpace provides tools to fuel your curiosity for space exploration.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_3;
