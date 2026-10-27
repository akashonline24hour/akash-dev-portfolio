import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akash Chandra Paul | Full-Stack Web Developer",
  description:
    "Portfolio of Akash Chandra Paul - Full-Stack Developer specializing in Next.js, React, Node.js, and MongoDB.",
  keywords: [
    "Akash Chandra Paul",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Tailwind CSS",
  ],
  authors: [{ name: "Akash Chandra Paul" }],
  openGraph: {
    title: "Akash Chandra Paul | Full-Stack Web Developer",
    description:
      "Crafting robust web applications with modern code, Next.js, and Tailwind CSS.",
    url: "https://akashchandrapaul.vercel.app",
    siteName: "Akash Chandra Paul Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Akash Chandra Paul Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Chandra Paul | Full-Stack Web Developer",
    description:
      "Crafting robust web applications with modern code, Next.js, and Tailwind CSS.",
    images: ["/avatar.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
