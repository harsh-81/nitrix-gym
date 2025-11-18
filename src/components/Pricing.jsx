'use client';

import AnimatedSection from './AnimatedSection';
import { Icon } from '@/components/ui/Icon';

export default function Pricing() {

    const plans = [
        { 
            name: "Basic", 
            price: "1500", 
            duration: "30 Days",
            features: ["Gym Access", "Basic Instructions"],
            popular: false,
        },
        { 
            name: "Silver", 
            price: "3200", 
            duration: "90 Days",
            features: ["Gym Access", "Cardio Classes"],
            popular: false,
        },
        { 
            name: "Gold", 
            price: "6000", 
            duration: "180 Days",
            features: ["Gym Access", "Cardio Classes", "Zumba"],
            popular: true,
        },
        { 
            name: "Platinum", 
            price: "11000", 
            duration: "365 Days",
            features: ["Gym Access", "Cardio", "Zumba", "Personal Trainer"],
            popular: false,
        },
        { 
            name: "Weekly Plan", 
            price: "500", 
            duration: "7 Days",
            features: ["Gym Access"],
            popular: false,
        },
    ];

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatedSection id="pricing" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        Membership <span className="text-red-500">Plans</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Choose the plan that fits your goals.
                    </p>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg border-2 
                            ${plan.popular ? 'border-red-500 shadow-red-500/20 md:scale-105' : 'border-gray-700 hover:scale-105'} 
                            flex flex-col transition-transform duration-300`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                                <span className="text-gray-400 block text-sm mt-1">{plan.duration}</span>
                            </div>

                            <ul className="text-gray-400 space-y-4 flex-grow mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center">
                                        <Icon 
                                            path="M10,17a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,1.42-1.42L10,14.59l8.29-8.3a1,1,0,0,1,1.42,1.42l-9,9A1,1,0,0,1,10,17Z" 
                                            className="w-5 h-5 text-red-500 mr-2" 
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="#contact" 
                                onClick={(e) => handleNavClick(e, 'contact')}
                                className={`mt-auto w-full inline-block font-bold py-3 px-6 rounded-full transition-all duration-300 
                                ${plan.popular 
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700' 
                                    : 'bg-gray-700 text-white hover:bg-red-500'
                                }`}
                            >
                                Select Plan
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </AnimatedSection>
    );
};
