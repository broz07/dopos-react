
"use client"
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition duration-300 ${
        scrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>
    </header>
  );
};

export default Header;
