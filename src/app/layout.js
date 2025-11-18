import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Nitrix Gym | Transform Your Body",
  description: "Specializing in body transformation with 25 years of industry-leading experience across 3 locations.",
  icons: {
    icon: "/favicon.ico", // place your favicon.ico file inside /public
    apple: "/apple-touch-icon.png", // optional: for iOS home screen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
