'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/types/card"; // Import your Card type

const SingleCard = ({ card }: { card: Card }) => {
  const {id, image, badge, logo, title, description } = card;
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Set to true once the component has mounted
  }, []);

  const handleCardClick = () => {
    router.push(`/singlepage/${id}`); // Navigate to a new page
  };

  return (
    <motion.div
      whileHover={{
        y: -10, // Moves up slightly
        boxShadow: "5px 5px 12px -1px rgba(32,28,28,0.75)", // 3D shadow effect
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-md max-h-md lg:h-80 rounded-2xl overflow-hidden bg-white shadow-lg  transition-all cursor-pointer"
      onClick={()=>handleCardClick()} // Navigate to a new page
    >
      {/* Top Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {badge}
        </span>
      </div>
      

      {/* Card Content */}
      <div className="mt-2">
        <div className="flex items-center space-x-2 p-1">
          <Image src={logo} alt={title} width={40} height={40} />
          <h3 className="text-lg font-semibold text-gray-900 p-2">{title}</h3>
        </div>
        <p className="m-2 text-gray-600 text-sm p-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default SingleCard;