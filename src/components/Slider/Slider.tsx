"use client"

import React, { useEffect } from "react"
import Glide from "@glidejs/glide";
import Image from "next/image";

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
    });

    slider.mount(); // Mount the slider

    return () => {
      slider.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="glide-09 relative w-2/3 overflow-hidden mt-30 md:mt-40 lg:mt-48">
        {/* Glide Track */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt="img"
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt=""
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt=""
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt=""
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt=""
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
                alt=""
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}