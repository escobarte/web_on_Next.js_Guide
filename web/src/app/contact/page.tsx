import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us | Transnatur INC',
  description: 'Get a freight quote, apply as a CDL-A driver, or reach our dispatch team. We respond within 2 business hours.',
  openGraph: {
    title: 'Contact Us | Transnatur INC',
    description: 'Reach Transnatur INC for freight quotes, driver applications, or general inquiries.',
    siteName: 'Transnatur INC',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
