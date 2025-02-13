import React from 'react';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Slider from '@/components/Slider/Slider';
import Choose from '@/components/Choose/Choose';
import ContactHome from "@/components/ContactHome/ContactHome"

export default function Home() {
  return (
    <>
      <Hero/>
      <Slider/>
      <About/>
      <Choose/>
      <ContactHome/>
    </>
  );
}