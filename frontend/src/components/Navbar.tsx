"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-10 transition duration-300 ${
        scroll ? "bg-emerald-500 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/campaigns" className="hover:underline">
            Campaigns
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <a
          href="/campaigns"
          className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full"
        >
          Campaigns
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
