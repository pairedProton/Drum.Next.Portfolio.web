import React from 'react'
import HeroSection from "./_sections/HeroSection/HeroSection"
import TextRevealSection from './_sections/TextRevealSection/TextRevealSec'
import LetsUnderstandSec from './_sections/LetsUnderstandSection/LetsUnderstandSec'
import OurProposedSolSec from './_sections/OurProposedSolSection/OurProposedSolSec'
import The4VerticalEngineSec from './_sections/The4VerticalEngineSection/The4VerticalEngineSec'
import ProvenScaleSec from './_sections/ProvenScaleSection/ProvenScaleSec'
import OurImpactSec from './_sections/OurImpactSection/OurImpactSec'
import TheRoadSec from './_sections/The2023RoadSection/TheRoadSec'
import MilestonesSec from './_sections/Milestones2030/MilestonesSec'
import TheVisionSec from './_sections/TheVisionSection/TheVisionSec'


export default function Page() {
  return (
    <main  className='overflow-x-hidden' >
      <HeroSection />
      {/* <TextRevealSection />
      <LetsUnderstandSec />
      <OurProposedSolSec />
      <The4VerticalEngineSec />
      <ProvenScaleSec />
      <OurImpactSec />
      <TheRoadSec />
      <MilestonesSec /> */}
      <TheVisionSec />
    </main>
  )
}