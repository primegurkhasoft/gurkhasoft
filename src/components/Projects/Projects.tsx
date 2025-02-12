
'use client'; 
import React, { useEffect, useState, useRef } from 'react';
import Card from '@/components/Cards/index';
import Title from './Title';
import Sidebar from './Search';

function Projects() {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

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

      <div className="flex mt-10">
        {/* Sidebar: Conditionally apply fixed positioning */}
        <div
          className={`${isSidebarFixed ? 'fixed top-10' : 'relative'} w-64`} // Adjust width as needed
        >
          <Sidebar />
        </div>

        {/* Main content: Adjust margin-left when sidebar is fixed */}
        <div className={`${isSidebarFixed ? 'ml-64' : ''}`}>
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;