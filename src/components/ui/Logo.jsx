import Image from 'next/image';

// Renders the gym's logo using Next.js Image component for optimization.
export const Logo = ({ className = "h-12 w-auto" }) => (
    // Note: In a real Next.js app, you'd import the logo and pass it to src.
    // For this example, we use the path directly from the public folder.
    <img src="/nitrix-gym-logo.jpg" alt="Nitrix Gym Logo" className={className} />
);
