import React from 'react';
import bg1 from "../../assets/bg1.png";
import { PiSliders } from "react-icons/pi";
import icon1 from "../../assets/baldwin.svg";
import icon2 from "../../assets/hogan.svg";
import icon3 from "../../assets/sulzer.svg";
import icon4 from "../../assets/flickr.svg";

const Section_1 = () => {
  return (
    <section>
      <div className='h-[calc(100vh-10rem)] flex [&>*]:flex-1'>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-around pl-10'> {/* Added padding-left to push right */}
            <h1 className='txt text-8xl font-bold text-[#1a253b]'>
              <span className='border-b-8 border-b-[#1a253b]'>Shyam</span> Modi
            </h1>
            <p className='txt opacity-50'> 
              Currently pursuing a B.Tech in CSE at IIIT Sri City, diving into the exciting challenges of my second year, with a strong interest in competitive programming, data structures and algorithms, and DevOps.
            </p>
          </div>
        </div>
        <div
          className='bg-1 flex flex-col justify-around'
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className='w-[500px] px-12 py-20 text-white flex flex-col gap-4'>
            <span className='txt text-6xl'>About</span>
            <h1 className='txt text-4xl font-extralight'>What I'm interested in?</h1>
            <p className='txt text-xl leading-7 text-gray-100 font-light'>
              Having a strong foundation in Web 2 technologies, I am now excited to explore Web 3 innovations, including blockchain, Solidity, smart contracts, and decentralized applications (DApps). Additionally, I have a keen interest in DevOps technologies such as Kubernetes, Docker, Jenkins, and Terraform, which enhance development workflows and infrastructure management.
            </p>
          </div>
          <div className='flex items-center relative'>
            <div className='btn-1 bg-[#1a253b] p-4 absolute left-[-3rem]'>
              <PiSliders color='white' />
            </div>
            <div className='overflow-hidden'>
              <button className='btn-2 bg-white text-[#1a253b] py-3 px-6 font-bold'>
                Development
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-20 border-t border-t-[rgba(1,1,1,.1)]'>
        <div className='grid grid_ py-3 gap-4 place-items-center [&>*]:w-24'>
          <img className='icon' src={icon1} alt="" />
          <img className='icon' src={icon2} alt="" />
          <img className='icon' src={icon3} alt="" />
          <img className='icon' src={icon4} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section_1;
