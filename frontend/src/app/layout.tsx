"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <Navbar />
        <main className="container mx-auto p-10 flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
        {/* Decorative Shapes */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>
      </body>
    </html>
  );
}
