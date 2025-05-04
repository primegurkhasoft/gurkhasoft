'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Cards } from "@/types/card";

const SingleCard = ({ card }: { card: Cards }) => {
  const { id, image, badge, title, description } = card;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/singlepage/${id}`);
  };

  return (
    <div 
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm"
      onClick={handleCardClick}
    >
      {/* Image with badge */}
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          {description}
        </p>
        
        {/* Action button */}
        <button 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Try now
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;