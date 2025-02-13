'use client';

import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cardsData from "@/components/Cards/cardsData"; // Adjust the path based on where cardData.tsx is located
import { div } from "framer-motion/client";

const SingleCardPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const router = useRouter();

    // Find the card by id
    const card = cardsData.find((card) => card.id.toString() === id);

    if (!card) {
        return (
            <div className="text-center text-red-500 mt-10">
                Card not found. <button onClick={() => router.push("/project")} className="underline text-blue-500">Go Back</button>
            </div>
        );
    }

    return (
      <  div     className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"  >
        <div className="lg:mx-36     ">
            <button
                onClick={() => router.push("/project")}
                className="mt-4 text-black rounded-md inline-flex items-center lg:my-10"
            >
                <IoIosArrowRoundBack className="mr-2" /> Back to Project
            </button>


            <div className="mt-4">
                <div className="flex items-center space-x-2 mt-4 ml-4">
                    <Image src={card.logo} alt={card.title} width={70} height={70} />
                    <h3 className="font-semibold text-gray-900 text-5xl">{card.title}</h3>
                </div>
                <p className="mt-4 ml-4 text-gray-600 text-lg">{card.description}</p>
                <p className="mt-4 ml-4 text-gray-600 text-sm bg-gray-200 rounded-full w-fit px-4 py-1">{card.badge}</p>
            </div>

            <div className="border-t border-gray-300 mx-4 my-10">
                <h1 className="font-semibold text-gray-900 text-4xl ml-4">Project Details</h1>
            </div>

            <div className="relative">
                <Image
                    src={card.image}
                    alt={card.title}
                    width={600}
                    height={600}
                    className="rounded-2xl lg:my-10"
                />
            </div>

            <p className="lg:w-3/5 lg:mr-6">{card.nodes1}</p>
            <p className="lg:w-3/5 lg:mr-6">{card.nodes2}</p>
        </div>
        </div>
    );
};

export default SingleCardPage;
