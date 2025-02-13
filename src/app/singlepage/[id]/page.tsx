'use client';

import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router"; // ✅ Correct import for Pages Router
import cardsData from "@/components/Cards/cardsData";

const SingleCardPage = () => {
  const router = useRouter();
  const { id } = router.query; // ✅ Get ID from query params

  const card = cardsData.find((c) => c.id.toString() === id);

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <div>
      <button onClick={() => router.back()} className="flex items-center gap-2 text-blue-500">
        <IoIosArrowRoundBack />
        Back
      </button>
      <h1 className="text-2xl font-bold">{card.title}</h1>
      <Image src={card.image} alt={card.title} width={500} height={300} />
      <p>{card.description}</p>
    </div>
  );
};

export default SingleCardPage;
