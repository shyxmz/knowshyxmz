import React from 'react'
import bg1 from '../../assets/bg1.png'

const Section_3 = () => {
  return (
    <section className='section-3 h-screen'>
        <div className='h-full flex items-center justify-center [&>*]:flex-1'>
            <div className='h-full flex items-center justify-center'>
                <div
                className='h-[500px] w-[480px] flex items-center'
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }}
                >
                    <div className='white-box bg-white w-[calc(100%-4.5rem)] h-[calc(100%-9rem)]'>
                        <div className="white-box-content h-full flex flex-col gap-4 p-8">
                            <h1 className='text-xl font-bold text-[#1a253b]'>Projects</h1>
                            <p className='w-72 text'>
                            blah blah blah blah blah blah blah blah blah blah blah.
                            blah blah blah.?
                            </p>
                            <div className='flex gap-6'>
                                <div>
                                    <p className='font-bold  text-[#1a253b] text-xl'>1</p>
                                    <span className='text-gray-600 text-xs font-bold'>StartHub</span>
                                    <div className='h-1 w-8 bg-[#54c6ff] mt-1'></div>
                                </div>
                                <div>
                                    <p className='font-bold text-[#1a253b] text-xl'>2</p>
                                    <span className='text-gray-600 text-xs font-bold'>DeSpace</span>
                                    <div className='h-1 w-8 bg-[#316bf4] mt-1'></div>
                                </div>
                                <div>
                                    <p className='font-bold text-[#1a253b] text-xl'>3</p>
                                    <span className='text-gray-600 text-xs font-bold'>MemeSaber</span>
                                    <div className='h-1 w-8 bg-[#E74B7E] mt-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <div className="text-content_s3 flex flex-col gap-4 w-80">
                    <span className='text-8xl font-bold text-[#1a253b] '>new</span>
                    <p className='text'>blah blah blah blah blah blah blah blah blahblah blah blah.
                    blah blahblahblahblah blahblah blahblah blahblah blahblah blahblahb,blah
                    blah blah blah blahblah!
                    </p>
                    <p className='text'>
                    blah blahblahblahblah blahblah blahblah blahblah blahblah blahblahb,blah
                    blah blah blah blahblah!
                    </p>
                    <button className='btn'>Working...</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_3