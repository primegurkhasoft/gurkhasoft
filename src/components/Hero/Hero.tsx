"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/utils/button"
import style from "./hero.module.css"

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Mouse position tracking
    const handleMouseMove = (event: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    // Video autoplay with fallback
    const attemptAutoPlay = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(error => {
            alert(error.message)
            videoRef.current!.muted = true
            videoRef.current!.play()
          })
      }
    }

    attemptAutoPlay()

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section>
      <div
        ref={heroRef}
        className="min-h-max bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-center px-4 pt-12 pb-48 relative overflow-hidden"
      >
        {/* Sparkle effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0) 70%)",
            transform: "translate(-50%, -50%)",
            transition: "left 0.1s, top 0.1s",
          }}
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform your ideas
            <br />
            into reality
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Build and deploy your next project with our powerful platform. Join thousands of developers creating amazing
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-cyan-300 hover:bg-cyan-400 text-black font-semibold rounded-md transition-colors hover:shadow">
              Get started
            </Button>
            <Button className="px-8 py-4 text-white hover:bg-gray-700 font-semibold rounded-md transition-colors">
              Request a demo
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Video */}
      <div className={`${style.cards} absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-32 shadow`}>
        <video
          ref={videoRef}
          src='/Videos/Hero/Poster.mp4'
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Hero