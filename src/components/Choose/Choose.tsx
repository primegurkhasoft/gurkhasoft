"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/utils/button"

interface StatCardProps {
  number: number
  suffix: string
  label: string
}

const StatCard: React.FC<StatCardProps> = ({ number, suffix, label }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = number / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1
      if (currentStep === steps) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount((prev) => Math.min(prev + increment, number))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-2"
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-800">
        {count.toFixed(number % 1 === 0 ? 0 : 2)}
        {suffix}
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </motion.div>
  )
}

type Feature = {
  title: string
}

type TypewriterProps = {
  features: Feature[]
  className?: string
}

const TypewriterEffect: React.FC<TypewriterProps> = ({ features, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isDeleting && currentIndex < features.length) {
        setCurrentText(features[currentIndex].title)
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(features[currentIndex - 1].title.substring(0, currentText.length - 1))
        if (currentText.length === 1) {
          setIsDeleting(false)
        }
      } else {
        setIsDeleting(true)
        setCurrentIndex((prevIndex) => prevIndex - 1)
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [currentIndex, currentText, isDeleting, features])

  return (
    <div className={className}>
      <span>{currentText}</span>
      <span className="text-gray-400">|</span>
    </div>
  )
}

const Choose: React.FC = () => {
  const features: Feature[] = [
    { title: "Best Product" },
    { title: "Use of Updated Technology" },
    { title: "24/7 Support" },
    { title: "Customer Satisfaction" },
    { title: "Team of Professionals" },
    { title: "Timely Delivery of the Product" },
    { title: "Affordable Price" },
    { title: "Product After Testing and Analysis" },
  ]

  return (
    <section className="min-h-fit bg-[url('/SVG/bg.svg')] bg-cover bg-center bg-opacity-2 shadow">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-800"
            >
              Why Choose Us
            </motion.h1>
            <TypewriterEffect
              features={features}
              className="text-4xl md:text-5xl lg:text-4xl font-bold text-yellow-600"
            />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
              We are a team of dedicated IT members working and performing their job to the best of our ability. We
              value your time and try to get the best out of the vision that you have seen. We prioritize customer
              satisfaction above all else. The best product is on your way - are you ready to trust us?
            </motion.p>
            <div className="grid grid-cols-3 gap-8 py-3">
              <StatCard number={50} suffix="+" label="Websites deployed" />
              <StatCard number={13} suffix="+" label="Developers" />
              <StatCard number={120} suffix="+" label="Projects Completed" />
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full">Get Started</Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-7 py-3 rounded-full">FAQ</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src="/SVG/choose.png" alt="Choose Us" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose

