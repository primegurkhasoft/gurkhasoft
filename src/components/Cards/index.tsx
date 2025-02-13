'use client';

import React from 'react';
import dynamic from 'next/dynamic';
// ✅ Corrected import
import  cardsData from './cardsData';

// Dynamically import the SingleCard component with no SSR
const SingleCard = dynamic(() => import("./SingleCard"), { ssr: false });


interface CardProps {
  cards: Cards[];
}

function Card(   { cards }: CardProps) {
  return (
    <div   >
    <div  className='lg:ml-36' >
        <h2 className='text-3xl font-semibold text-gray-900 dark:text-white' >Projects</h2>
      </div>
    <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  lg:ml-36 xl:gap-10 border-t border-b border-gray-200 dark:border-gray-800 pt-10 pb-12 px-9 ">
      
      {cardsData.map((card,key) => (
        <SingleCard card={card} key={key} /> // ✅ Now correctly resolved

      
         
      ))}



    </div>
    </div>
  );
}

export default Card;
