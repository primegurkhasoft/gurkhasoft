'use client';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";

const categories = [
  { title: "All Integrations" },
  { title: "Content Management" },
  { title: "Database & Backend" },
  { title: "Digital Asset Management" },
  { title: "E-commerce" },
  { title: "Frameworks" },
  { title: "Identity & Authentication" },
  { title: "Monitoring & Analytics" },
  { title: "Works with Netlify Connect" },
  { title: "Search & Personalization" },
  { title: "Security" },
  { title: "Templates" },
  { title: "Testing & QA" },
  { title: "Community Built" },
];

interface SidebarProps {
  setFilteredCards: (searchTerm: string) => void; // Prop to set filtered cards
}

const Sidebar = ({ setFilteredCards }: SidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State for toggling the dropdown

  // Filter cards based on search query (by title or badge)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredCards(value); // ✅ Actually calling the function passed via props
  };

  return (
    <div className="w-full sm:w-full md:w-72 lg:w-72 xl:w-72 bg-white shadow-lg p-4 h-screen overflow-y-auto lg:ml-24 max-h-fit">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange} // ✅ Now it's used properly
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdown Toggle Button for small screens */}
      <button
        className="lg:hidden mt-4 px-4 py-2 text-black rounded-md inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categories
        {isOpen ? <IoIosArrowDown className="ml-2" /> : <IoIosArrowForward className="ml-2" />}
      </button>

      {/* Categories list, visible only on small screens when toggled */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <h3 className="mt-6 text-lg font-bold text-gray-800 ">Discover</h3>
        <ul className="mt-2 space-y-2">
          {categories.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 hover:text-blue-500 transition py-2"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
