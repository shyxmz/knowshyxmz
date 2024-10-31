import React from 'react'
import bg2 from '../../assets/bg2.png'
import laptop from "../../assets/desk.jpg"

const Section_5 = () => {
  return (
    <section className='section-5 h-screen bg-[#eef7fe] flex items-center justify-center'>
        <div className='h-[550px] w-[1000px] flex items-center justify-around gap-4'
        style={{
            backgroundImage:`url(${bg2})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
        }}
        >
            <div className="side-1">
                <h1 className='text-white text-4xl font-bold mb-10'>Lorem Ipsum</h1>
                <img 
                className='h-28 w-96 object-cover'
                src={laptop} alt="" />
            </div>
            <div className="side-2">
                <p className='w-72 text-xs text-gray-200 leading-6 mb-10'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <button className='bg-gray-200 text-[#1a253b] font-bold px-6 py-3'>Loreming</button>
            </div>
        </div>
    </section>
  )
}

export default Section_5