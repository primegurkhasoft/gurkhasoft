'use client';

import React from 'react';
import dynamic from 'next/dynamic';
// ✅ Corrected import
import  cardsData from './cardsData';



const SingleCard = dynamic(() => import("./SingleCard"), { ssr: false });



function Card () {
  return (
    <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2  xl:gap-10 border-t border-b border-gray-200 dark:border-gray-800 pt-10 pb-12 px-9 ">
      {cardsData.map((card,key) => (
        <SingleCard card={card} key={key} /> // ✅ Now correctly resolved

      
         
      ))}



    </div>
  );
};

export default Card;