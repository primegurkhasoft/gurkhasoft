"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ServiceTwo() {
  const topics = [
    {
      id: 1,
      title: "Digital Marketing",
      image: "/Images/Services/DG.png",
      content: "Digital marketing involves promoting products or services via digital channels such as search engines, websites, social media, and email.",
      bulletPoints: [
        "Boosts online visibility and brand awareness",
        "Engages target audiences through personalized ads",
        "Analyzes marketing performance with real-time data",
        "Leverages social media platforms for greater reach",
      ],
    },
    {
      id: 2,
      title: "SEO",
      image: "/Images/Services/SEO.png",
      content: "Search Engine Optimization (SEO) is the process of optimizing websites to improve their ranking on search engines like Google.",
      bulletPoints: [
        "Increases website traffic and visibility",
        "Optimizes content with keywords and meta tags",
        "Improves website loading speed and user experience",
        "Builds quality backlinks to boost authority",
      ],
    },
    {
      id: 3,
      title: "Website Development",
      image: "/Images/Services/webDev.jpg",
      content: "Website development involves building and maintaining websites to make them functional, user-friendly, and optimized for performance.",
      bulletPoints: [
        "Creates responsive designs for all devices",
        "Develops e-commerce platforms for online businesses",
        "Enhances user experience with smooth navigation",
        "Integrates security features to protect data",
      ],
    },
    {
      id: 4,
      title: "Software Development",
      image: "/Images/Services/SDLC.jpg",
      content: "Software development is the process of designing, coding, testing, and maintaining software applications for various platforms.",
      bulletPoints: [
        "Develops custom software tailored to business needs",
        "Follows agile methodologies for faster delivery",
        "Ensures scalability and performance optimization",
        "Provides ongoing maintenance and updates",
      ],
    },
    {
      id: 5,
      title: "QA and Testing",
      image: "/Images/Services/webDev.jpg",
      content: "Quality Assurance (QA) and Testing ensure that software functions correctly and meets predefined standards through rigorous evaluation.",
      bulletPoints: [
        "Identifies bugs and issues through thorough testing",
        "Ensures software functionality and performance",
        "Follows industry best practices for quality assurance",
        "Reduces risks and improves customer satisfaction",
      ],
    },
    {
      id: 6,
      title: "E-commerce",
      image: "/Images/Services/e-commerce.jpg",
      content: "E-commerce refers to buying and selling goods and services over the internet through secure online platforms.",
      bulletPoints: [
        "Enables businesses to reach a global audience",
        "Offers secure payment gateways for transactions",
        "Integrates inventory and order management systems",
        "Provides detailed analytics and reporting tools",
      ],
    },
    {
      id: 7,
      title: "Mobile Application Development",
      image: "/Images/Services/mobileapp.jpg",
      content: "We build custom mobile applications that deliver seamless user experiences across iOS and Android platforms, helping businesses engage customers anytime, anywhere.",
      bulletPoints: [
        "Native iOS and Android app development",
        "Cross-platform solutions with React Native/Flutter",
        "Enterprise mobile application integration",
        "App store optimization and deployment",
        "Ongoing maintenance and support services",
        "UI/UX design tailored for mobile experiences",
        "Secure mobile payment integrations",
        "Offline functionality and data synchronization"
      ],
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex flex-col md:flex-row items-center mb-12 h-96 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
            } ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} p-4`}
          id={topic.title.toLowerCase().replace(/\s+/g, "-")}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-full p-4">
            <Image
              src={topic.image}
              alt={topic.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover h-full"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
            <p className="text-gray-700 mb-4">{topic.content}</p>
            <ul className="list-disc pl-5 text-gray-700">
              {topic.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ServiceTwo;
