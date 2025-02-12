'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from '@/components/Cards/index';
import Title from './Title';
import Sidebar from './Search';

function Projects() {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null); // Ref to track the Title div

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
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
  }, []);

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
            isSidebarFixed ? 'fixed top-10' : 'relative'
          } w-full md:w-64 z-10 bg-white shadow-md md:shadow-none`} // Added background and shadow for better visibility
        >
          <Sidebar />
        </div>

        {/* Main content: Adjust margin-left when sidebar is fixed */}
        <div
          className={`flex-1 ${
            isSidebarFixed ? 'md:ml-64' : ''
          } mt-4 md:mt-0`} // Added margin-top for mobile
        >
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;
