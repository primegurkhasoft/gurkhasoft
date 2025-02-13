'use client';

import React, { useEffect, useState, useRef } from 'react';
import Card from '@/components/Cards/index';
import Title from './Title';
import Sidebar from './Search';
import { Cards } from '@/types/card';
import cardsData from '../Cards/cardsData';

function Projects() {
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filteredCards, setFilteredCards] = useState<Cards[]>(cardsData); // State for filtered cards
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Add a reference to the card div

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current && cardRef.current && !isMobile) {
        const titleHeight = titleRef.current.offsetHeight;
        const cardBottom = cardRef.current.getBoundingClientRect().bottom + window.scrollY;
  
        if (window.scrollY > titleHeight && window.scrollY < cardBottom - window.innerHeight) {
          setIsSidebarFixed(true);
        } else {
          setIsSidebarFixed(false);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Implement the setFilteredCards function
  const handleFilterCards = (searchTerm: string) => {
    if (searchTerm) {
      const filtered = cardsData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.badge.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cardsData); // Reset to full list if search term is empty
    }
  };

  return (
    <section>
      <div ref={titleRef}>
        <Title />
      </div>

      <div className="flex flex-col md:flex-row mt-10">
        <div
          className={`${
            isSidebarFixed && !isMobile ? 'fixed top-20' : 'relative'
          } w-full md:w-64 z-10 bg-white shadow-md md:shadow-none`}
        >
          <Sidebar setFilteredCards={handleFilterCards} />
        </div>

        <div
          ref={cardRef} // Add the reference to the card div
          className={`flex-1 ${
            isSidebarFixed && !isMobile ? 'md:ml-64' : ''
          } mt-4 md:mt-0`}
        >
          <Card cards={filteredCards} />
        </div>
      </div>
    </section>
  );
}

export default Projects;