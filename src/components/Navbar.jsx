'use client'; // This directive marks the component as a Client Component.

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Home", "About", "Services", "Trainers", "Pricing", "Contact"];
    
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* === LOGO SECTION (Corrected) === */}
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
                        {/* Increased logo size slightly for better visibility */}
                        <Logo className="h-12 w-auto" />
                        {/* Added the brand name with styling */}
                        <span className="ml-2 text-2xl font-black tracking-wider text-white">NITRIX</span>
                    </a>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={(e) => handleNavClick(e, link.toLowerCase().replace(' ', '-'))} className="text-gray-300 hover:text-red-500 transition-colors duration-300">{link}</a>
                        ))}
                    </div>

                     <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hidden md:block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                         Join Now
                     </a>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4 bg-black/90 rounded-lg p-4">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={(e) => handleNavClick(e, link.toLowerCase().replace(' ', '-'))} className="block text-gray-300 hover:text-red-500 py-2">{link}</a>
                        ))}
                         <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="block mt-2 text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                             Join Now
                         </a>
                    </div>
                )}
            </div>
        </nav>
    );
};