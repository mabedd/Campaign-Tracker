"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url(https://via.placeholder.com/1600x900)" }}
    >
      <div className="container mx-auto p-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6">
            Make A Big Difference By Small Effort
          </h1>
          <p className="text-xl mb-6">
            Join us in making great ideas a reality. Your little effort can help
            a lot to a community.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/donate"
              className="inline-block px-6 py-3 bg-emerald-500 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="inline-block px-6 py-3 bg-gray-600 text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              Become a Volunteer
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
