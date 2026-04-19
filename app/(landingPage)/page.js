import React from 'react'
import HeroSection from "./_sections/HeroSection/HeroSection"
import TextRevealSection from './_sections/TextRevealSection/TextRevealSec'
import LetsUnderstandSec from './_sections/LetsUnderstandSection/LetsUnderstandSec'
import OurProposedSolSec from './_sections/OurProposedSolSection/OurProposedSolSec'
export default function Page() {
  return (
    <main>
      <HeroSection />
      <TextRevealSection />
      <LetsUnderstandSec />
      <OurProposedSolSec />
    </main>
  )
}