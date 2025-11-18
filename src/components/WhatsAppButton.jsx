'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/919210750922" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
