'use client';

import React from 'react';
import dynamic from 'next/dynamic';
// ✅ Corrected import
import cardsData from './cardsData';
// ✅ Corrected import
import { Cards } from '@/types/card';

// Dynamically import the SingleCard component with no SSR
const SingleCard = dynamic(() => import("./SingleCard"), { ssr: false });


interface CardProps {
  cards: Cards[];
}

function Card(   { cards }: CardProps) {
  return (
    <div>
      <div className="lg:ml-36">
        <h2 className="text-3xl font-semibold text-gray-900 ">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:ml-36 xl:gap-10   pt-10 pb-12 px-9">
        {cards.map((card, key) => (
          // Ensure SingleCard accepts the 'card' prop and render it
          <SingleCard card={card} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Card;
