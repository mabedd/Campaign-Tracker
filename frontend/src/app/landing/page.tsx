"use client";

import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto p-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6">
            Innovate, Fund, Succeed
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            Welcome to Our Crowdfunding Platform
          </h2>
          <p className="text-xl mb-6">
            Join us in making great ideas a reality. Explore campaigns, support
            innovative projects, and make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/register"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
            >
              Register
            </a>
            <a
              href="/campaigns"
              className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transition duration-300"
            >
              Campaigns List
            </a>
          </div>
        </motion.div>

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
      </div>
    </div>
  );
};

export default Landing;
