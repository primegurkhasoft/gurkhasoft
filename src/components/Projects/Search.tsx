'use client';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for toggling the dropdown

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-full md:w-72 lg:w-72 xl:w-72 bg-white dark:bg-gray-900 shadow-lg p-4 h-screen overflow-y-auto lg:ml-24 max-h-fit">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block  `}>
        <h3 className="mt-6 text-lg font-bold text-gray-800 dark:text-gray-200">Discover</h3>
        <ul className="mt-2 space-y-2">
          {filteredCategories.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition py-2"
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
