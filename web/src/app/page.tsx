import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/SocialProofBar'
import { FeatureCards } from '@/components/sections/FeatureCards'
import { TrustSection } from '@/components/sections/TrustSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Transnatur INC — Built for the Road. Trusted by Shippers.',
  description: 'Transnatur INC delivers full truckload and partial freight across the US. CDL-A drivers wanted — join our modern Peterbilt fleet.',
  openGraph: {
    title: 'Transnatur INC — Built for the Road. Trusted by Shippers.',
    description: 'FTL and LTL freight across all 48 states. Reliable, GPS-tracked, transparent pricing.',
    siteName: 'Transnatur INC',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <FeatureCards />
      <TrustSection />
      <Testimonials />
      <FaqAccordion />
      <CtaBanner />
    </>
  )
}
