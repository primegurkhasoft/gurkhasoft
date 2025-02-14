import React from 'react'
import  AnimatedTestimonialsDemo from '@/components/FAQ/faqData';

function page() {
  return (
    <div>
        <div>
            <section className="text-center py-8 px-4 sm:px-8">
                <div className="text-gray-500 text-xs sm:text-sm tracking-wider uppercase">
                    FAQ
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold   mt-10 ">Frequently Asked Questions</h1>
                <p className="mt-5 text-base sm:text-lg md:text-xl   ">
                    Discover, connect, and configure dev tools and APIs that extend the limits
                    of web performance and team productivity.
                </p>
            </section>
        </div>
       
      
        <AnimatedTestimonialsDemo />
  
    </div>
  )
}

export default page