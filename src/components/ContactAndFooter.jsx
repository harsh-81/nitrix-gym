'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function ContactAndFooter() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const branches = [
      {
        name: "Nitrix Gym 1",
        address: "Gali No 1, 60 Feet Rd, Vishwas Nagar",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8565929782208!2d77.29494129999999!3d28.664012299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5912186d93%3A0x84fc6eb1f0e85ad0!2sShree%20mahabir%20mandir!5e0!3m2!1sen!2sin!4v1759141295328!5m2!1sen!2sin",
      },
      {
        name: "Nitrix Gym 2",
        address: "Bazar Gali, 60 Feet Rd, Vishwas Nagar",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7684608606723!2d77.2976848!3d28.666650700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb92c99e5351%3A0x35f249a1351be4be!2sThe%20Glow%20Station%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1759141438722!5m2!1sen!2sin",
      },
      {
        name: "Nitrix Gym 3",
        address: "Street No 12, 60 Feet Rd, Vishwas Nagar",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8938324456826!2d77.2897667!3d28.662897400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb40bdd078d9%3A0x89fdc1c36a72692e!2sTMB%20ATM!5e0!3m2!1sen!2sin!4v1759141466555!5m2!1sen!2sin",
      },
    ];

    // 🔹 Updated handleChange with phone restriction
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            // Only allow digits and max 10 characters
            if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                user_name: formData.name,
                user_phone: formData.phone,
                user_email: formData.email,
                user_message: formData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert("✅ Message sent successfully!");
            setFormData({ name: "", phone: "", email: "", message: "" });
        })
        .catch((err) => {
            console.error("❌ Error:", err);
            alert("Failed to send. Please try again.");
        })
        .finally(() => setLoading(false));
    };

    return (
        <AnimatedSection id="contact" className="py-20 bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        Find Us & <span className="text-red-500">Get In Touch</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have questions or ready to start? Visit a branch or drop us a line.
                    </p>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Locations Section */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {branches.map((branch, index) => (
                            <div 
                                key={index} 
                                className="bg-black/30 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch"
                            >
                                <div className="w-full sm:w-1/3 h-48 sm:h-full">
                                    <iframe 
                                        src={branch.mapSrc} 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="p-6 w-full sm:w-2/3 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-white mb-2">{branch.name}</h3>
                                    <p className="text-gray-400">{branch.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form & Info Section */}
                    <div className="lg:col-span-2 bg-black/30 p-8 rounded-lg shadow-xl border border-gray-800 flex flex-col">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>
                            <form onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name" 
                                        required
                                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 transition-colors" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number" 
                                        required
                                        maxLength="10" // 🔹 Added
                                        pattern="[0-9]{10}" // 🔹 Added
                                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 transition-colors" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email" 
                                        required
                                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 transition-colors" 
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message" 
                                        rows="5" 
                                        required
                                        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 disabled:opacity-50"
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-700">
                             <h3 className="text-2xl font-bold text-white mb-6">Our Info</h3>
                             <div className="space-y-4 text-gray-400">
                                 <p className="flex items-center">
                                     📞 9210750922
                                 </p>
                                 <p className="flex items-center">
                                     ✉️ nitrixgym.ng@gmail.com
                                 </p>
                             </div>
                             <div className="mt-8">
                                 <h4 className="text-lg font-semibold text-white mb-2">General Hours</h4>
                                 <p className="text-gray-400">Mon - Sat: 6:00 AM - 11:00 AM</p>
                                 <p className="text-gray-400">& 5:00 PM - 10:00 PM</p>
                                 <p className="text-gray-400">Sunday: Off</p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between justify-center items-center text-center md:text-left space-y-6 md:space-y-0">
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.facebook.com/share/19efaU3rXG/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </a>

                            <a 
                                href="https://www.instagram.com/nitrix_gym_?igsh=b3o2bzJxcWZqd2F6" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-8 pt-6 border-t border-gray-800">
                        © {new Date().getFullYear()} Nitrix Gym. All Rights Reserved.
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
