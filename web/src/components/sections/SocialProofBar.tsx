'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Loads delivered monthly' },
  { value: '12 yrs', label: 'In operation' },
  { value: '4.9★', label: 'Driver satisfaction' },
  { value: 'DOT', label: 'Licensed & insured' },
]

export function SocialProofBar() {
  return (
    <motion.section
      className="bg-surface border-y border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''}`}>
              <div className="font-display font-bold text-3xl text-accent mb-1">{stat.value}</div>
              <div className="text-text-secondary text-sm font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
