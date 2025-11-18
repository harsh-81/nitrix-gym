'use client';

import AnimatedSection from './AnimatedSection';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function FounderSection() {

    const founder = {
        name: "Vinod Kumar",
        title: "Founder & Head Trainer",
        img: "/founder.jpg",
        description: `
            Vinod Kumar is the Founder and Head Trainer at Nitrix Gym, bringing over two decades of expertise
            in the fitness industry. A certified trainer from Gold Gym, he is highly specialised in body 
            transformation and bio-mechanics. With his deep knowledge, hands-on training approach, and 
            passion for fitness, he has guided countless individuals in achieving their health and fitness goals.
        `,
        facebook: "https://www.facebook.com/share/19efaU3rXG/",
        instagram: "https://www.instagram.com/nitrix_gym_?igsh=b3o2bzJxcWZqd2F6"
    };

    return (
        <AnimatedSection id="founder" className="py-20 bg-black">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        Meet Our <span className="text-red-500">Founder</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-96">
                        <img 
                            src={founder.img}
                            alt={founder.name}
                            className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                            <div className="flex space-x-6">
                                <a 
                                    href={founder.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-500 transform hover:scale-125 transition-transform"
                                >
                                    <FaFacebook size={28} />
                                </a>

                                <a 
                                    href={founder.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-500 transform hover:scale-125 transition-transform"
                                >
                                    <FaInstagram size={28} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 text-center">
                        <h3 className="text-3xl font-bold text-white">{founder.name}</h3>
                        <p className="text-red-500 text-lg mt-1">{founder.title}</p>
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed whitespace-pre-line">
                            {founder.description}
                        </p>
                    </div>
                </div>

            </div>
        </AnimatedSection>
    );
}
