import React, { useState } from 'react'
import { FaBars, FaDiscord, FaTimes, FaTwitter } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const navLinks = ["Home", "Works", "Mission", "Contact", "FAQ"]

  return (
    <>
      <nav className="w-full px-4 sm:px-6 py-4 bg-gradient-to-b from-gray-900 to-black shadow-2x1  border-b border-indigo-500/30 font-[Poppins] relative overflow-hidden">

        <div className=' absolute hidden md:block -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full
border border-white/5 bg-gradient-to-b from-purple-900/20 to-transparent backdrop-blur-xl pointer-events-none'/>

        <div className='absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w=64 h-64
rounded-full bg-radial-graddient from-purple-600/30 to-transparent blur-2x1 opacity-40 animate-pulse-slow'/>

        <div className='max-w-7xl    mx-auto flex items-center justify-between relative z-50'>
          {/* LOGO SECTION */}
          <div className=' flex items-center space-x-2 group'>
            <div className=' relative'>
              <div className=' absolute -inset-1 bg-gradient-to-r from-purple-600 ☐ to-blue-500 rounded-full
blur opacity-30 group-hover:opacity-50 transition duration-300 animate-rotate'/>

              <div className=' relative px-4 py-2 ☐ bg-gray-900 ring-1 ring-gray-900/5 rounded-full leading-none backdrop-blur-sm'>
                <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400
to-blue-300 text-xl font-bold tracking-wider hover:animate-shimmer'>
                  CRYPTO
                </span>
              </div>

            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className=' md:hidden z-50'>
            <button onClick={toggleMobileMenu} className='Itext-gray-300 hover: text-indigo-400 transition-allduration-300 p-2'>
              {isOpen ? (
                <FaTimes className=' w-7 h-7' />
              ) :
                (<FaBars className=' w-7 h-7' />)
              }
            </button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className=' hidden md:flex items-center space-x-8 px-8 py-2 rounded-full
border border-white/10 ☐ bg-gray-900/50 backdrop-blur-lg shadow-x1'>
            {navLinks.map((link) => (
              <div key={link} className=' relative group'>
                <span className=' text-gray-300 group-hover:text-indigo-400 transition-colors
duration-300 text-1g font-semibold tracking-wide cursor-pointer'>
                  {link}
                </span>
                I
                <div className=' absolute h-0.5 bg-gradient-to-r from-purple-500 ☐ to-blue-400
w-0 group-hover:w-full transition-all duration-300 mt-1'/>
              </div>
            ))}
          </div>

          {/* DESKTOP ICONS */}
          <div className=' hidden md:flex items-center space-x-6'>
            <div className=' flex space-x-4 bg-gray-900/50 backdrop-blur-lg px-4 py-2
rounded-full border border-white/10'>
              <a href="#" className=' p-2 rounded-full bg-gray-800 hover:bg-indigo-500/80
transition-all duration-300 hover:animate-pulse'>
                <FaTwitter className=' w-5 h-5 text-gray-300 group-hover:text-indigo-400' />
              </a>
              <a href="#" className=' p-2 rounded-full bg-gray-800 hover:bg-indigo-500/80
transition-all duration-300 hover:animate-pulse'>
                <FaDiscord className=' w-5 h-5 text-gray-300 group-hover:text-indigo-400' />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm
z-40 transition-all duration-500 ${isOpen ?
            "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className=' flex flex-col items-center justify-center h-full space-y-8 pt-20'>
            <ul className=' w-full'>
              {navLinks.map((link) => (
                <li key={link} className=' mb-4 text-center'>
                  <a href="#" className=' text-2x1 text-gray-300 hover:text-indigo-400 font-medium
transition-colors duration-300 relative group block'>
                    {link}
                    <span className=' absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0
h-0.5 bg-gradient-to-r ☐ from-purple-500 to-blue-400 transition-all
duration-300 group-hover:w-full'>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* SOCIAL ICONS */}
            <div className=' flex space-x-6 mt-4'>
              <a href="#" className=' p-3 rounded-full bg-gray-800 hover:bg-indigo-500/20
transition-all duration-300 active: scale-95'>
                <FaTwitter className=' w-7 h-7 text-gray-300 hover:text-indigo-400' />
              </a>
              <a href="#" className=' p-3 rounded-full bg-gray-800 ☐hover:bg-indigo-500/20
transition-all duration-300 active: scale-95'>
                <FaDiscord className=' w-7 h-7 text-gray-300 hover:text-indigo-400' />
              </a>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar