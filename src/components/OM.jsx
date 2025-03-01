import React, { useState } from 'react'
import DI from "../assets/DI.avif";
import FT from "../assets/FT.png";
import SD from "../assets/SD.png";
const OM = () => {
    const [activeOption, setActiveOption] = useState(1);
    const options = [
        { id: 1, title: "Digital Innovation", img: DI },
        { id: 2, title: "Future Tech", img: FT },
        { id: 3, title: "Smart Design", img: SD },
    ];


    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 flex flex-col
    items-center p-4 sm:p-8 gap-12">
                {/* MISSION SECTIONS */}
                <div className=' text-center space-y-4 sm:space-y-6 max-w-4xl '>
                    <h2 className=' text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6
font-montserrat tracking-tighter' >
                        <span className=' bg-clip-text text-transparent bg-linear-to-r
from-cyan-400 to-blue-500' >Our</span>
                        <span className=' bg-clip-text text-transparent bg-linear-to-r
from-purple-400 to-pink-500 ml-2 sm:ml-4' >Mission</span>
                    </h2>
                    <p className='text-gray-300 text-base sm:text-xl md:text-2xl font-light leading-relaxed'>
                        To revolutionize the digital landscape through innovative solutions that bridge
                        <span className='bg-purple-500/20 px-1 sm:px-2 mx-1 rounded-lg'>
                            human creativity
                        </span>
                        <span className="bg-blue-500/20 px-1 sm:px-2 mx-1 rounded-lg" >technological excellence </span>,
                        empowering businesses to thrive in an ever-evolving digital ecosystem.
                    </p>
                </div>
                {/* MAIN CONTENT  */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full flex-grow">
                    {/* CLICKABLE OPTION */}
                    <div className="flex flex-row md:flex-col gap-2 sm:gap-4 order-2 md:order-1">
                        {options.map((option) => (
                            <button
                                onClick={() => setActiveOption(option.id)}
                                key={option.id}
                                className={`p-2 sm:p-4 rounded-2xl transition-all duration-300 
          ${activeOption === option.id ?
                                        "bg-gradient-to-br from-purple-500 to-blue-500 scale-105 shadow-xl"
                                        : "bg-black/20 hover:bg-purple-500/20 hover:scale-95"}`}
                            >
                                <span className={`text-sm sm:text-xl font-bold 
          ${activeOption === option.id ? "text-white" : "text-purple-300"}`}>
                                    {option.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* CENTER CONTANT  */}
                    {/* CENTER CONTENT */}
                    <div className=' relative max-w-2xl text-center z-10 order-1 md:order-2'>
                        <div className=' absolute -inset-4 bg-gradient-to-r  from-purple-500 to-blue-500
blur-2xl opacity-30 rounded-3xl' />
                        <div className=' relative bg-black/40 backdrop-blur-xl rounded-3xl p-4 sm:p-8
md:p-12 border border-white/10'>
                            <h1 className=' text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r
from-purple-400 to-blue-400 bg-clip-text text-transparent' >
                                Next Generation Solutions
                            </h1>
                            <p className='text-gray-300 text-base sm: text-1g md: text-x1 mb-4 sm:mb-8 font-light
leading-relaxed' >
                                Transform your digital experience with our cutting-ege technology stack and innovative design approach.
                            </p>
                            < button className=' bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2
                                sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full font-bold hover:scale-105
transition-transform shadow-lg shadow-purple-500/30'>
                                Explore More
                            </button>
                        </div>
                    </div>
                    {/* RIGHT SIDE IMAGES */}
                    <div className=' relative w-full sm:w-4/5 md:w-2/3 lg:w-96 order-3'>
                        <div className=' relative bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl
backdrop-blur-xl border border-white/10 overflow-hidden' >
                            <img src={options.find(o => o.id === activeOption)?.img} alt="Features"
                                className=' w-full h-auto object-cover transform transition-all duration-500
hover:scale-110' />
                            <div className='absolute bottom-2 left-2 right-2 bg-black/40 p-2 sm:p-4
rounded-xl backdrop-blur-sm' >
                                <h3 className=' text-white font-bold text-sm sm:text-xl' >
                                    {options.find(o => o.id === activeOption) ?.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OM