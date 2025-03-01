import React from 'react'
import "./HIW.css"
import HIW1 from "../../assets/HIW1.png"
import HIW2 from "../../assets/HIW2.png"
import HIW3 from "../../assets/HIW3.png"


const HIW = () => {
  return (
    <>
      <section className=' bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 px-4 relative text-white overflow-hidden'>

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

        <div className=' max-w-7xl mx-auto text-center relative z-10'>
          <h2 className=' text-5xl md:text-7xl font-bold mb-6 font-montserrat tracking-tighter' >
            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-cyan-400
to-blue-500' >
              How It
            </ span>
            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-400
to-pink-500 ml-4'>
              Works
            </span>
          </h2>
          <p className=' max-w-2xl mx-auto text-gray-300 text-xl md:text-2xl mb-16 font-lato leading-relaxed' >
            Transforming complexity into seamless digital experiences through innovative solutions
          </p>

          <div className=' grid grid-cols-1 md:grid-cols-3 gap-12 px-4'>
            {[HIW1, HIW2, HIW3].map((img, index) => (
              <div key={index} className=' relative group perspective-1000 transform hover : scale-105
transition-all duration-500 ease-out ' >
                <div className=' absolute inset-0 bg-gradient-to-br  from-cyan-500/20 to-purple-500/20 rounded-3xl
blur-xl group-hover:blur-2xl transition-all duration-500' />
                <div className=' relative bg-gray-900/80 rounded-3xl p-8 shadow-2xl border
border-gray-700/50 backdrop-blur-xl transform-style-preserve-3d' >
                  <div className=' absolute inset-0 rounded-3xl border border-white/10' />
                  <div className=' relative z-20'>
                    <div className=' mb-8 relative inline-block' >
                      <img src={img} alt={`Step ${index + 1} `}
                        className=' w-32 h-32 md:w-48 md:h-48 object-contain animate-float' />


                      <div className=' absolute inset-0 bg-gradient-to-rfrom-cyan-500
Ito-purple-600 rounded-full opacity-20 blur-2xl -z-10'/>

                    </div>
                    <h3 className=' text-2xl font-bold mb-4 font-montserrat bg-clip-text
text-transparent bg-gradient-to-r from-cyan-400 to-blue-500'>
                      {
                        [
                          "Secure Integration",
                          "Smart Automation",
                          "Instant Delivery",
                        ][index]
                      }
                    </h3>
                    <p className='Itext-gray-300 font-lato text-lg leading-relaxed'>
                      {
                        [
                          "Military-grade encryption protects every transaction and data exchange",
                          "AI-powered workflows optimize processes in real-time",
                          "Lightning-fast deployment ensures immediate results",
                        ][index]
                      }
                    </p>
                  </div>

                  {/* HOVER EFFECT */}
                  <div className=' absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className=' absolute inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl animate-pulse-slow'>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section >
    </>
  )
}

export default HIW