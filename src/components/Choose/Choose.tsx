"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/utils/button";
import { motion } from 'framer-motion';

type Feature = {
  title: string;
};

const TypewriterEffect: React.FC<{ features: Feature[] }> = ({ features }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const TYPING_SPEED = 60;
  const ERASING_SPEED = 40;
  const PAUSE_DURATION = 1000;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentFeature = features[currentFeatureIndex].title; 

    if (isTyping) {
      if (currentWord.length < currentFeature.length) {
        timeoutId = setTimeout(() => {
          setCurrentWord(currentFeature.slice(0, currentWord.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (currentWord.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentWord(currentWord.slice(0, currentWord.length - 1));
        }, ERASING_SPEED);
      } else {
        setIsTyping(true);
        setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentWord, isTyping, currentFeatureIndex, features]);

  return (
    <motion.div
      key={currentFeatureIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[40px] text-lg md:text-xl font-medium text-gray-800"
    >
      {currentWord}
      <span className="animate-pulse ml-1">|</span>
    </motion.div>
  );
};

const Choose: React.FC = () => {
  const features: Feature[] = [
    { title: 'Best Product' },
    { title: 'Use of Updated Technology' },
    { title: '24/7 Support' },
    { title: 'Customer Satisfaction' },
    { title: 'Team of Professionals' },
    { title: 'Timely Delivery of the Product' },
    { title: 'Affordable Price' },
    { title: 'Product After Testing and Analysis' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#52e8ff] to-[#2dd4eb]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-800"
            >
              Why Choose Us
            </motion.h1>

            {/* Features Display */}
            <TypewriterEffect features={features} />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-700 leading-relaxed"
            >
              We are a team of dedicated IT members working and performing their job to the best of our ability.
              We value your time and try to get the best out of the vision that you have seen. We prioritize
              customer satisfaction above all else. The best product is on your way - are you ready to
              trust us?
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Get Started
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full">
                FAQ
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block">
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute"
                  style={{
                    width: `${200 - i * 40}px`,
                    height: `${200 - i * 40}px`,
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.2)',
                    top: `${i * 20}px`,
                    left: `${i * 20}px`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
