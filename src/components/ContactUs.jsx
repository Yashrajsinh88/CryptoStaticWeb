import React, { useState } from 'react';
import { FaComment, FaEnvelope, FaUser } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleBlur = () => {
        setIsExpanded(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" }); // ✅ Reset form fields properly

            // Hide success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        }, 2000);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 relative overflow-hidden">
                {/* FLOATING PARTICLES BG */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* MAIN CONTACT CARD */}
                <div
                    className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transition-all duration-500 ${isExpanded ? "w-[600px]" : "w-[500px]"
                        }`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <div className="p-8 space-y-6">
                        {/* HEADER */}
                        <div className="text-center group">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent inline-block">
                                Get in Touch
                            </h1>
                            <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-20 mx-auto mt-2 rounded-full transform group-hover:scale-x-150 transition-all" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* NAME INPUT */}
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* EMAIL INPUT */}
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* MESSAGE TEXTAREA */}
                            <div className="relative">
                                <FaComment className="absolute left-3 top-4 text-purple-400" />
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] shadow-lg hover:shadow-purple-500/30"
                            >
                                <RiSendPlaneFill className="animate-bounce" />
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                            </button>
                        </form>

                        {/* SUCCESS MESSAGE */}
                        {isSuccess && (
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-2xl backdrop-blur-sm animate-fade-in">
                                <div className="text-center text-green-400">
                                    <RiSendPlaneFill className="text-4xl mx-auto mb-2 animate-pulse" />
                                    <p className="text-xl font-bold">Message Sent Successfully!</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* DECORATIVE ELEMENT */}
                    <div className=' absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-500' />
                    <div className=' absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-500' />
                    <div className=' absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-500' />
                    <div className=' absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-500' />
                </div>
            </div>
        </>
    );
};

export default ContactUs;
