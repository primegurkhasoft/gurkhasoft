"use client";

import React, { useEffect } from 'react'
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Glide from "@glidejs/glide";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import ServiceTwo from "@/components/Services/ServiceTwo";

function Services() {

  const services = [
    {
      title: "Digtal Marketing",
      image: "/Images/Services/DG.png",
      href: "#",
    },
    {
      title: "Search Engine Optimization",
      image: "/Images/Services/SEO.png",
      href: "#",
    },
    {
      title: "Software Development",
      image: "/Images/Services/SDLC.jpg",
      href: "#",
    },
    {
      title: "Web Development",
      image: "/Images/Services/webDev.jpg",
      href: "#",
    },
    {
      title: "Mobile Application",
      image: "/Images/Services/mobileapp.jpg",
      href: "#",
    },
  ]


  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1, gap: 36 },
      },
    });

    slider.mount(); // Mount the slider

    return () => {
      slider.destroy(); // Cleanup on unmount
    };
  }, []);



  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center py-8 px-4 sm:px-8"

        >

          <div className="text-gray-500 text-xs sm:text-sm tracking-wider uppercase">
            Integrations
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold   mt-10 ">Services</h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl   ">
            Discover, connect, and configure dev tools and APIs that extend the limits
            of web performance and team productivity.
          </p>

        </motion.div>



      </AuroraBackground>

      <section className="flex justify-center items-center">
        <div className="glide-09 relative w-4/5 overflow-hidden mt-6  ">
          {/* Glide Track */}
          <div data-glide-el="track">
            <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex  overflow-hidden  p-0">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group overflow-hidden rounded-lg bg-gray-100 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <li className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      fill
                      alt={service.title}
                      className="object-cover brightness-75 transition-all duration-300 group-hover:scale-105 group-hover:brightness-90m-auto   m-auto h-20 max-h-full w-auto max-w-full "
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-white">{service.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      <ServiceTwo />

    </div>
  )
}

export default Services
























































