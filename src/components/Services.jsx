'use client';

import AnimatedSection from './AnimatedSection';

// Services Section Component
export default function Services() {
    const servicesList = [
        { img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop", title: "Body Transformation", description: "Our core specialty. Comprehensive programs for a complete physical overhaul." },
        { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", title: "Weight Management", description: "Expert-led strategies for sustainable and healthy weight loss or gain." },
        { img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop", title: "Strength Training", description: "Build muscle and strength with scientifically-backed training protocols." },
        { img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop", title: "Nutrition Plan", description: "Craft a diet plan that complements your fitness goals with our expert nutritionists." },
    ];
    return (
        <AnimatedSection id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Our <span className="text-red-500">Services</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We provide a wide range of services to help you achieve your fitness goals.</p>
                     <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesList.map((service, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg text-center border border-gray-700 hover:border-red-500 hover:bg-gray-800 transition-all duration-300 overflow-hidden group">
                           <div className="h-48 overflow-hidden">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};
