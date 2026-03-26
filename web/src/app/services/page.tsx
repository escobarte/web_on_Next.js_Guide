import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Our Services | Transnatur INC',
  description: 'Full truckload, partial load, express delivery, route planning, real-time tracking, and 24/7 dispatch. See all Transnatur INC freight services.',
  openGraph: {
    title: 'Our Services | Transnatur INC',
    description: 'Full truckload, partial load, express delivery — across all 48 states.',
    siteName: 'Transnatur INC',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
