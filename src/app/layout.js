import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://nitrix-gym.netlify.app"),

  title: "Nitrix Gym | Transform Your Body",
  description:
    "Specializing in body transformation with 25+ years of industry-leading experience across 3 locations. Premium coaching, strength training, and elite performance.",
  keywords: [
    "Nitrix Gym",
    "Nitrix Team",
    "Nitrix Fitness",
    "Nitrix Gym India",
    "Gym India",
    "Best Gym Near Me",
    "Body Transformation Gym",
    "Sports Performance Training",
    "Strength Training Gym",
    "Personal Training",
    "Fitness Center",
    "Gym Transformation",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://nitrix-gym.netlify.app",
  },

  openGraph: {
    title: "Nitrix Gym – Transform Your Body, Transform Your Life",
    description:
      "Join Nitrix Gym for elite fitness training, transformation programs, and science-backed coaching with 25+ years of proven results.",
    url: "https://nitrix-gym.netlify.app",
    siteName: "Nitrix Gym",
    images: [
      {
        // Make sure this image exists inside /public folder
        url: "https://nitrix-gym.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nitrix Gym OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nitrix Gym | Transform Your Body",
    description:
      "Premium body transformation & elite fitness training. Trusted for 25+ years.",
    images: ["https://nitrix-gym.netlify.app/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
