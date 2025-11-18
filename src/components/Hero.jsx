'use client';

export default function Hero() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            {/* Background */}
            <div className="absolute inset-0 w-full h-full animate-kenburns">
                <img
                    src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
                    alt="Gym hero background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="relative z-20 text-center px-4">
                
                {/* New Attractive Heading */}
                <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                        Transform Your Body
                    </span>
                    <br />
                    <span className="text-white drop-shadow-lg">
                        Elevate Your Life
                    </span>
                </h1>

                {/* New Refined Subtitle */}
                <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed drop-shadow-md">
                    25 years of proven expertise — empowering thousands through science-backed training and premium coaching.
                </p>

                {/* Button */}
                <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                               text-white font-bold py-3 px-10 rounded-full text-lg 
                               transition-all duration-300 transform hover:scale-110 
                               shadow-lg hover:shadow-red-500/40"
                >
                    Start Your Journey
                </a>
            </div>
        </section>
    );
}
