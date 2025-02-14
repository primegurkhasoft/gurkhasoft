'use client';
import React from 'react'
import { Vacancies } from '@/types/vacency'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";




const SingleCareer = ({ vacency }: { vacency: Vacancies }) => {
  const { id, jobTitle, deadline, location, } = vacency;

  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/career/${id}`); // Navigate to a new page
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white  shadow-solid-3 transition-all hover:shadow-solid-4 "
      >
        <div className="border border-gray-300 rounded-lg shadow-md p-6 m-4 h-full ">
          <h3 className="  text-3xl  text-black  xl:text-itemtitle  font-bold mb-2">
            {jobTitle}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Deadline:</strong> {deadline}
          </p>
          <h3 className="text-sm text-gray-600 mb-4"> <strong> Location:</strong>{location}</h3> 
          <p   className=" text-sm text-gray-600 mb-4" ><strong> Qualification:</strong> ......</p>
         
          <div className="flex justify-between items-center  hover:cursor-pointer  px-2 text-blue-500 font-bold rounded-xl   mt-6"
           onClick={handleCardClick}
          >
              Learn More  →
          </div>

</div>


      </motion.div>
    </>
  );
};



export default SingleCareer





