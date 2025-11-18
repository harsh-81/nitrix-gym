'use client';

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

// About Section Component
export default function About() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <AnimatedSection id="about" className="py-20 bg-black text-gray-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">About <span className="text-red-500">Nitrix Gym</span></h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-semibold text-white mb-4">25 Years of Fitness Excellence.</h3>
                        <p className="mb-4">
                            Welcome to Nitrix Gym, where we specialize in total body transformation. With over 25 years of expertise in the fitness and wellness industry, our mission is to provide you with the knowledge, tools, and support to achieve your ultimate physique.
                        </p>
                        <p className="mb-6">
                            We are experts in weight management, gym management, and biomechanics, ensuring a scientific and effective approach to your training. Join us to redefine your limits and build the body you've always wanted.
                        </p>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                            Know More
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/gym4.jpg" alt="Gym Interior 1" className="rounded-lg shadow-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                            <img src="/gym2.jpg" alt="Weight Area" className="rounded-lg shadow-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
                            <img src="/gym3.jpg" alt="Cardio Zone" className="rounded-lg shadow-lg w-full h-full object-cover col-span-2 transform hover:scale-105 transition-transform duration-300"/>
                            {/* <img src="/gym4.jpg" alt="Cardio Zone" className="rounded-lg shadow-lg w-full h-full object-cover col-span-2 transform hover:scale-105 transition-transform duration-300"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
