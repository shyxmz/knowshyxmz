import React from 'react'
import bg1 from "../../assets/bg1.png"
import { PiSliders } from "react-icons/pi";
import icon1 from "../../assets/baldwin.svg"
import icon2 from "../../assets/hogan.svg"
import icon3 from "../../assets/sulzer.svg"
import icon4 from "../../assets/flickr.svg"


const Section_1 = () => {
  return (
    <section>
    <div className='h-[calc(100vh-10rem)] flex [&>*]:flex-1'>
        <div className='flex justify-center'>
            <div className='flex flex-col justify-around'>
                <h1 className='text-8xl font-bold text-[#1a253b]'>
                    <span className='border-b-8 border-b-[#1a253b]'>Id</span>entic
                </h1>
                <p className='opacity-50'> 
                Lorem Ipsum dolor sit amet consectetur 
                    <br/> adipisicing elit
                </p>
            </div>
        </div>
        <div
        className='flex flex-col justify-around'
        style ={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
        >
            <div className='w-96 px-12 py-20 text-white flex flex-col gap-4'>
                <span>Lorem</span>
                <h1 className='text-xl font-bold'>Ipsum Dolor</h1>
                <p className='text-sm leading-6 text-gray-200'>Lorem Ipsum dolor sit amet blah blah lorem ipsum dolor sit amet lala
                    ipsum lorem sit amet dolor nigaa gawk gawk deep thorat your phone 
                    linging nigga pick up your phone nigga its linging since five minutes
                    shut the fuck up and sit tight as the adventure is about to begin!
                </p>
            </div>
            <div className='flex items-center relative'>
                <div className='bg-[#1a253b] p-4 absolute left-[-3rem]'>
                    <PiSliders color='white' />
                </div>
                <div>
                    <button className='bg-white text-[#1a253b] py-3 px-6 font-bold'>
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className='h-20 border-t border-t-[rgba(1,1,1,.1)]'>
        <div className='grid grid_ py-3 gap-4 place-items-center [&>*]:w-24'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
    </div>
    </section>
  )
}

export default Section_1