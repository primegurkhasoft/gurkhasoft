"use client"

import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { FaWallet, FaGraduationCap  } from "react-icons/fa"
import { IoBagSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiStagetimer } from "react-icons/si";
import { FaFileContract } from "react-icons/fa";


const sliderItems = [
  {
    id: 1,
    icon: <FaGraduationCap className="text-cyan-400" />,
    desc: "Experienced team",
  },
  {
    id: 2,
    icon: <IoBagSharp  className="text-cyan-400" />,
    desc: "Quality Work",
  },
  {
    id: 3,
    icon: <MdOutlineWatchLater className="text-cyan-400" />,
    desc: "Timely Delivery and Monitoring",
  },
  {
    id: 4,
    icon: <SiStagetimer className="text-cyan-400" />,
    desc: "24/7 Support",
  },
  {
    id: 5,
    icon: <FaFileContract className="text-cyan-400" />,
    desc: "Legally Compliant",
  },
  {
    id: 6,
    icon: <FaWallet className="text-cyan-400" />,
    desc: "Budget Friendly",
  },
]

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1, gap: 36 },
      },
    })

    slider.mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <section className="flex justify-center items-center">
      <div className="glide-09 relative w-2/3 overflow-hidden mt-28 md:mt-40 lg:mt-48">
        {/* Glide Track */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {sliderItems.map((item) => (
              <li key={item.id} className="flex flex-col items-center justify-center px-4 py-8">
                <div className="text-4xl mb-4">
                  {React.cloneElement(item.icon, {
                    className: "h-12 w-12 text-blue-600",
                  })}
                </div>
                <p className="text-gray-700 text-center text-lg font-medium">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}