import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/types/card"; // Import your Card type

const SingleCard = ({ card }: { card: Card }) => {
  const { image, badge, logo, title, description } = card;

  return (
    <motion.div
      whileHover={{
        y: -10, // Moves up slightly
        boxShadow: "5px 5px 12px -1px rgba(32,28,28,0.75)", // 3D shadow effect
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg p-5 transition-all"
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
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt={title} width={20} height={20} />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default SingleCard;
