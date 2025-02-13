'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from '@/components/Cards/index';
import Title from './Title';
import Sidebar from './Search';

function Projects() {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const titleRef = useRef<HTMLDivElement>(null); // Ref to track the Title div

  useEffect(() => {
    // Function to check if the screen is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkIsMobile();

    // Add resize event listener to update mobile state
    window.addEventListener('resize', checkIsMobile);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current && !isMobile) {
        // Get the height of the Title div
        const titleHeight = titleRef.current.offsetHeight;
        // Check if the user has scrolled past the Title div
        if (window.scrollY > titleHeight) {
          setIsSidebarFixed(true);
        } else {
          setIsSidebarFixed(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]); // Re-run effect when isMobile changes

  return (
    <section>
      {/* Title div with ref to track its height */}
      <div ref={titleRef}>
        <Title />
      </div>

      <div className="flex flex-col md:flex-row mt-10">
        {/* Sidebar: Conditionally apply fixed positioning */}
        <div
          className={`${
            isSidebarFixed && !isMobile ? 'fixed top-20' : 'relative'
          } w-full md:w-64 z-10 bg-white shadow-md md:shadow-none`}
        >
          <Sidebar />
        </div>

        {/* Main content: Adjust margin-left when sidebar is fixed */}
        <div
          className={`flex-1 ${
            isSidebarFixed && !isMobile ? 'md:ml-64' : ''
          } mt-4 md:mt-0`}
        >
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;