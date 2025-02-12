

'use client';
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

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-72 bg-white dark:bg-gray-900 shadow-lg p-4 h-screen overflow-y-auto ml-20  ">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

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
  );
};

export default Sidebar;
