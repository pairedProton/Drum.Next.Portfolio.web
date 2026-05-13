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
import GrowthSec from './_sections/GrowthWithSection/GrowthSec'
import TheInvestmentSec from './_sections/TheInvestmentSection/TheInvestmentSec'
import NumberSec from './_sections/NumbersSection/NumberSec'
import GallerySec from './_sections/GallerySection/GallerySec'
import TheFutureAgriSec from './_sections/TheFutureAgriSection.jsx/TheFutureAgriSec'


export default function Page() {
  return (
    <main  className='overflow-x-hidden' >
      <HeroSection />
      <TextRevealSection />
      <LetsUnderstandSec />
      <OurProposedSolSec />
      <The4VerticalEngineSec />
      <ProvenScaleSec />
      <OurImpactSec />
      <TheRoadSec />
      <MilestonesSec />
      <TheVisionSec />
      <GrowthSec />
      <NumberSec />
      <TheInvestmentSec />
      <GallerySec />
      <TheFutureAgriSec />
    </main>
  )
}