'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Cards } from "@/types/card"; // Import your Card type
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


const SingleCard = ({ card }: { card: Cards }) => {
  const { id, image, badge, title, description } = card;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/singlepage/${id}`); // Navigate to a new page
  };

  return (
    <>
      <CardContainer className=""
      >
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border 
        "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              alt={title}
              height="1200"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"

            />
            <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
              {badge}
            </span>
          </CardItem>
          <div className="flex justify-between items-center  hover:cursor-pointer  mt-16">
            <CardItem
              translateZ={20}
             onClick={handleCardClick}
              
             
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>

          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default SingleCard;





















