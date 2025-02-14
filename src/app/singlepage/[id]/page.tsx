'use client';

import { use } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cardsData from "@/components/Cards/cardsData"; // Adjust the path based on where cardData.tsx is located

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
        <div className="lg:mx-36 mx-4 mb-10">
            {/* Back Button */}
            <button
                onClick={handleBackClick}
                className="mt-4 text-black rounded-md inline-flex items-center lg:my-10 hover:bg-gray-200 p-2 transition duration-300"
            >
                <IoIosArrowRoundBack className="mr-2 text-lg" /> Back to Project
            </button>

         
            {/* Card Title and Description */}
            <div className="mt-8 flex flex-col items-start mb-10">
                <div className="flex items-center space-x-4">
                    <Image src={card.logo} alt={card.title} width={70} height={70} className="rounded-full" />
                    <h3 className="font-semibold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">{card.title}</h3>
                </div>

                <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">{card.description}</p>
                <p className="mt-4 text-gray-600 text-sm bg-gray-200 rounded-full w-fit px-4 py-1">{card.badge}</p>
            </div>

            {/* Divider */}
            

            {/* Project Details Section */}
            <h1 className="font-semibold text-gray-900 text-2xl sm:text-3xl lg:text-4xl mb-6">Project Details</h1>

            {/* Image */}
            <div className="w-full flex justify-center">
                <Image
                    src={card.image}
                    alt={card.title}
                    width={600}
                    height={600}
                    className="rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-2xl"
                />
            </div>

            {/* Project Descriptions */}
            <div className="mt-10">
                <p className="lg:w-3/5 lg:mr-6 text-base sm:text-lg lg:text-xl mb-4">{card.nodes1}</p>
                <p className="lg:w-3/5 lg:mr-6 text-base sm:text-lg lg:text-xl">{card.nodes2}</p>
            </div>
        </div>
    );
};

export default SingleCardPage;
