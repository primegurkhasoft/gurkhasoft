
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
function Title() {
  return (
  


  <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.5, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
       
      >
        <section className="text-center py-8 px-4 sm:px-8">
  <div className="text-gray-500 text-xs sm:text-sm tracking-wider uppercase">
    Integrations
  </div>
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold   mt-10 ">Discover</h1>
  <p className="mt-5 text-base sm:text-lg md:text-xl   ">
    Discover, connect, and configure dev tools and APIs that extend the limits
    of web performance and team productivity.
  </p>
  </section>
      </motion.div>
    </AuroraBackground>


  )
}

export default Title








