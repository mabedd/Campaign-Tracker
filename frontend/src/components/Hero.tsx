"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/imgs/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center p-10"
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
