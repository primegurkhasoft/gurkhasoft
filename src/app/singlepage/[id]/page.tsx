'use client';

import { use } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";

import { useRouter } from "next/navigation";
import cardsData from "@/components/Cards/cardsData"; // Adjust the path based on where cardData.tsx is located
import { div } from "framer-motion/client";

const SingleCardPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params); // Unwrap the params to get the id
    const router = useRouter(); // Initialize the router

    // Find the card by id
    const card = cardsData.find((card) => card.id.toString() === id);

    if (!card) {
        return <div>Card not found</div>;
    }

    // Function to handle back button click
    const handleBackClick = () => {
        router.push("/project"); // Replace '/projects' with the actual path of your project listing page
    };

    return (
      <  div     className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"  >
        <div className="lg:mx-36     ">
            <button
                onClick={handleBackClick}
                className=" mt-4  text-black rounded-md inline-flex    items-center  lg:my-10 " >
                <IoIosArrowRoundBack className="mr-2 "  /> Back to Project
            </button>
            <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
<div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

            <div className="mt-4">
                <div className="flex items-center space-x-2 mt-4 ml-4">
                    <Image src={card.logo} alt={card.title} width={70} height={70} />
                    <h3 className=" font-semibold text-gray-900 text-5xl ">{card.title}</h3>
                </div>
                <p className="mt-4 ml-4 text-gray-600 text-lg">{card.description}</p>
                <p className="mt-4 ml-4 text-gray-600 text-sm bg-gray-200 rounded-full w-fit px-4 py-1">{card.badge} </p>
            </div>
            <div className="border-t border-gray-300 mx-4 my-10"></div>
            <h1 className="font-semibold text-gray-900 text-4xl ml-4  "   >Project Details</h1>

            <div className="relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={600}
                      className="rounded-2xl   lg:my-10"
                    />
                   
                  </div>
                  {/* <h1 className="font-semibold text-gray-900 text-xl   ">Details About Project  </h1> */}
                  <p   className="lg:w-3/5 lg:mr-6" >   {card.nodes1}</p>
                  <p className="lg:w-3/5 lg:mr-6" >{card.nodes2}</p>








          
        </div>
        </div>
    );
};

export default SingleCardPage;
