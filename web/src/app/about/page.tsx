import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us | Transnatur INC',
  description: 'Learn about Transnatur INC — a freight carrier founded in 2012. Our story, mission, team, and values.',
  openGraph: {
    title: 'About Us | Transnatur INC',
    description: 'From 3 trucks to a full fleet. The story behind Transnatur INC.',
    siteName: 'Transnatur INC',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
