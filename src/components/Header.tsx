"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled ?  'bg-gray-100 text-gray-900' : 'bg-transparent text-gray-900'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
            <Image 
                src="/assets/logo2.svg" 
                alt="Dopos Logo" 
                width={40} 
                height={40} 
                className="desktop:w-32 laptop:w-32 tablet:w-32 w-20 hover:mix-blend-exclusion hover:brightness-100 hover:invert-100" />
          <h1 className="text-2xl font-bold hidden">DOPOS HK s.r.o.</h1>
        </div>
        <Menu />
        <ul className={`desktop:hidden laptop:hidden flex`}>
          TODO: MOBILNI MENU
        </ul>
      </div>
    </header>
  );
};

export default Header;
