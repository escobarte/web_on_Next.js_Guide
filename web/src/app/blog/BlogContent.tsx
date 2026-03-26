'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Badge } from '@/components/ui/Badge'

const featuredPost = {
  category: 'Industry',
  title: 'How fuel surcharges actually work — and what shippers can do about it',
  excerpt: 'Fuel surcharges are one of the most misunderstood line items on a freight invoice. Here is a clear breakdown of how they are calculated and how smart shippers can minimize their impact.',
  date: 'March 14, 2025',
}

const posts = [
  { category: 'News', title: 'DOT issues new ELD compliance update for 2025', date: 'March 10, 2025' },
  { category: 'Guides', title: 'FTL vs LTL: which is right for your shipment?', date: 'February 28, 2025' },
  { category: 'Industry', title: 'Driver shortage trends and what carriers are doing about it', date: 'February 20, 2025' },
  { category: 'Guides', title: "How to read a bill of lading (BOL) — a shipper's guide", date: 'February 12, 2025' },
  { category: 'News', title: 'Transnatur INC expands Southeast corridor service', date: 'February 5, 2025' },
]

const categories = ['All', 'News', 'Guides', 'Industry']

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary mb-6">Freight industry insights</h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent text-bg'
                    : 'bg-surface border border-border text-text-secondary hover:border-accent hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {(activeCategory === 'All' || activeCategory === featuredPost.category) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-surface border border-border rounded-lg p-8 mb-10 transition-all duration-200 hover:border-accent cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge>{featuredPost.category}</Badge>
              <span className="text-text-secondary font-body text-xs">Featured</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-text-primary mb-4">{featuredPost.title}</h2>
            <p className="text-text-secondary font-body text-base leading-relaxed mb-4">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary font-body text-xs">{featuredPost.date}</span>
              <span className="text-accent font-body text-sm font-medium">Read more →</span>
            </div>
          </motion.div>
        )}

        {/* Post Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {filtered.map((post, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-lg p-6 transition-all duration-200 hover:border-accent cursor-pointer"
            >
              <Badge>{post.category}</Badge>
              <h3 className="font-display font-bold text-lg text-text-primary mt-3 mb-3">{post.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary font-body text-xs">{post.date}</span>
                <span className="text-accent font-body text-sm font-medium">Read more →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
