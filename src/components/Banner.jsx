import React from 'react';
import BannerImage from "../assets/BannerImage.png";

const Banner = () => {
  return (
    <>
      <section
        className="relative h-[60vh] flex items-center justify-center text-white bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/80 to-black"></div>

        {/* BANNER CONTENT */}
        <div className="relative z-10 max-w-4xl text-center px-6 sm:px-12 py-10 mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Multi-Blockchain DeFi Earn
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 block sm:inline sm:ml-4">
              Works and Borrow Across Networks
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed font-poppins text-gray-300">
            Seamlessly earn interest and borrow assets across multiple blockchains with a modern approach.
          </p>

          <button className="relative bg-gradient-to-r from-purple-500 to-indigo-600 border-none px-6 sm:px-8 py-3 rounded-full text-white text-lg md:text-xl font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:from-indigo-600 hover:to-purple-500">
            Launch App
          </button>
        </div>
      </section>

      {/* MARKETBOX SECTION */}
      <section className=' bg-black py-12 px-4'>
        <div className=' relative w-full max-w-5xl mx-auto'>
          <div className=' absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500  to-pink-500
opacity-50 blur-lg animate-border' />
          {/* MAIN CONTENT */}
          <div className=' relative backdrop-blur-xl bg-gradient-to-br  from- [#000b1d] to-[#0a1226]
border border-[#ffffff15] rounded-3xl p-8 shadow-2xl' style={{
              clipPath: "polygon (0 5%, 100% 0, 100% 95%, 0 100%)",
              boxShadow: "0 0 50px rgba(104,109,224,0.2)",
            }}>

            {/* FLOATING PARTICLES BG */}
            <div className=' absolute inset-0 opacity-20'>
              {[...Array(20)].map((_, i) => (
                <div key={i} className=' absolute w-1 h-1 bg-white rounded-full animate-float'
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* CONTENT GRID */}
            <div className=' relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
              {["Total Value", "Market Value", "Value Locked"].map((title) => (
                <div key={title} className=' group relative p-6 rounded-xl transition-all
duration-500  hover:bg-[#ffffff08] hover:-translate-y-2'>
                  <div className=' absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r
from-cyan-400 to-pink-500 group-hover:w-full group-hover:transition-all duration-300'>
                  </div>


                  {/* CONTENT */}
                  <div className=' text-center space-y-4'>
                    <h3 className=' text-sm uppercase tracking-widestItext-cyan-300
font-bold opacity-90'>
                      {title}
                    </h3>
                    <p className=' text-3xl font-extrabold bg-gradient-to-r from-purple-200
to-cyan-300 bg-clip-text text-transparent' >
                      $605.04M
                    </p>
                  </div>
                  {/* CONTENT ACCENTS */}
                  <div className=' absolute top-2 right-2 w-3 h-3 border-t-2
border-r-2 " border-cyan-400 opacity-50' >
                  </div>
                  <div className='absolute bottom-2 left-2 w-3 h-3 border-b-2
border-1-2I border-pink-400 opacity-50'>
                  </div>
                </div>
              ))}
            </div>

   {/* CENTER DIVIDER  */}
         <div className=' absolute inset-x-0 top-1/2 md:block lg:hidden '>
           <div className=' h-[1px] bg-gradient-to-r from-transparent via-[#ffffff15] to-transparent w-full'>
            
           </div>
         </div>

          </div>
        </div>
      </section >

    </>

  );
};

export default Banner;
