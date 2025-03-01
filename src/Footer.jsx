import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <footer className=' bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white
pt-16 pb-8 border-t border-purple-900/50'>
                <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* GRID CONTAINER */}
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                        {/* SOCIAL LINKS */}
                        <div className=' space-y-6 order-1 lg:order-1'>
                            <h3 className=' text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
bg-clip-text text-transparent' >
                                Connect With Us
                            </h3>
                            <div className=' flex space-x-5'>
                                {
                                    [
                                        { icon: FaTwitter, color: '#1DA1F2', link: '#' },
                                        { icon: FaFacebook, color: '#1877F2', link: '#' },
                                        { icon: FaInstagram, color: '#E4405F', link: '#' },
                                    ].map((social, index) => (
                                        <a className='p-3 transition-transform duration-300 hover:scale-110
rounded-lg' key={index} href={social.link}
                                            style={{ color: social.color }}>
                                            <social.icon size={36} className=' hover:drop-shadow-[0_0_12px_rgba(192, 132, 252, 0. 5) ]' />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>

                        {/* QUICKS LINKS */}
                        <div className=' space-y-6 order-2 lg:order-2'>
                            <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
bg-clip-text text-transparent' >
                                Quick Links
                            </h3>
                            <div className=' space-y-4'>
                                {['Home', 'Works', 'Mission', 'FAQ'].map((link, index) => (
                                    <a href="" key={index}
                                        className=' block text-lg hover:text-purple-400
transition-all duration-300 hover:pl-3 border-l-2
border-transparent hover:border-purple-400' >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* NEWSLETTER */}
                        <div className=' space-y-6 order-3 lg:order-3 lg:col-span-2'>
                            <h3 className=' text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
bg-clip-text text-transparent' >
                                Stay Updated
                            </h3>
                            <form className=' flex flex-col space-y-4 relative group' >
                                <div className=' relative w-full'>
                                    <div className=' absolute -inset-1 bg-gradient-to-r from-purple-600
to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50
transition-all duration-300' />

                                    <input type="email" placeholder='Enter Your Email' className=' w-full
bg-gray-800/50 backdrop-blur-sm rounded-3xl px-6 py-4 text-lg
focus:outline-none focus:ring-2 focus:ring-purple-400 border-2
border-gray-700 hover:border-purple-400 transition-all
placeholder-gray-500 text-gray-100 pr-24' />

                                    <button type='submit' className=' absolute right-2 top-2 bg-gradient-to-r
from-purple-500 to-pink-500 text-white
px-6 py-2 rounded-2xl transition-transform duration-300 font-medium
text-lg hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105
flex items-center gap-2'>
                                        <span>Join</span>
                                        <FiArrowRight className=' h-5 w-5' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* COPYRIGHT */}
                    <div className=' border-t border-gray-800/50 mt-12 pt-8 relative' >
                        <div className=' absolute -top-3 left-1/2 transform -translate-x-1/2'>
                            <div className=' w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500
rounded-full blur-xl opacity-30' />
                        </div>
                        <div className=' text-center space-y-3'>
                            <p className='text-gray-400 text-lg' >
                                &copy; 2025 Crypto. All rights reserved.
                                </p>
                                <p className=' text-basetext-gray-500' >
                                    Designed By {" "}
                                    <a
                                    className='text-white hover:text-purple-500 bg-clip-text hover:underline'
                                    target='_blank' rel='noopener noreferrer' href="">
                                   Yashrajsinh Dodiya
</a>
                                </p>
                        </div>
                    </div>
                </div>
            </ footer >
        </>
    )
}

export default Footer