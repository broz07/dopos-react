"use client"
import Header from '@dopos/components/Header';
// import ImageCarousel from '@dopos/components/ImageCarousel';
import Image from 'next/image';
import { useState } from 'react';
import AboutSection from '@dopos/components/sections/AboutSection';
import ServiceSection from '@dopos/components/sections/ServiceSection';
import ReferenceSection from '@dopos/components/sections/ReferenceSection';
import ContactSection from '@dopos/components/sections/ContactSection';

const PageLayout = () => {

    const [currentPage, setCurrentPage] = useState('home');

    return (
    <div className="absolute top-0 left-0 right-0 bottom-0 min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className="absolute top-0 left-0 right-0 min-h-screen flex-col">
        <div className="h-[38rem]">
          {/* <ImageCarousel /> */}          
          <Image 
            src="/assets/img3.jpeg" 
            alt="Sample Image" 
            width={1920} 
            height={1080} 
            className="w-full h-full object-cover" 
          />          
        </div>
        <AboutSection />
        <ServiceSection />
        <ReferenceSection />
        <ContactSection />
      </main>
    </div>
    )
}

export default PageLayout;