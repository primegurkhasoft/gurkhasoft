'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Cards } from '@/types/card';

// Dynamically import the SingleCard component with no SSR
const SingleCard = dynamic(() => import("./SingleCard"), { ssr: false });

interface CardProps {
  cards: Cards[];
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div>
      <div className="lg:ml-36">
        <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:ml-36 xl:gap-10 border-t pt-10 pb-12 px-9">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} /> 
        ))}
      </div>
    </div>
  );
}

export default Card;
