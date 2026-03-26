import type { Metadata } from 'next'
import BlogContent from './BlogContent'

export const metadata: Metadata = {
  title: 'Freight Industry Insights | Transnatur INC',
  description: 'Stay updated with freight industry news, trucking guides, and updates from Transnatur INC.',
  openGraph: {
    title: 'Freight Industry Insights | Transnatur INC',
    description: 'News, guides, and industry insights from the Transnatur INC team.',
    siteName: 'Transnatur INC',
  },
}

export default function BlogPage() {
  return <BlogContent />
}
