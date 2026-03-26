'use client'
import { motion } from 'framer-motion'
import { Truck, Package, Zap, Map, Radio, Headphones } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const features = [
  { icon: Truck, title: 'Full Truckload', desc: 'Door-to-door FTL across all 48 states. Dedicated lanes, competitive rates.' },
  { icon: Package, title: 'Partial Load', desc: 'LTL options for smaller shipments. Pay only for the space you use.' },
  { icon: Zap, title: 'Express Delivery', desc: 'Time-sensitive cargo handled with priority routing and real-time updates.' },
  { icon: Map, title: 'Route Planning', desc: 'Optimized routes with live traffic data. Fewer delays, lower fuel costs.' },
  { icon: Radio, title: 'Real-time Tracking', desc: 'GPS tracking on every truck. Know where your load is at all times.' },
  { icon: Headphones, title: '24/7 Dispatch', desc: 'Round-the-clock dispatch team. Someone always picks up the phone.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function FeatureCards() {
  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp}>
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-text-primary mb-12">
            Everything you need on the road
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-lg p-6 transition-all duration-200 hover:border-accent cursor-default"
            >
              <f.icon className="text-accent mb-4" size={28} />
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
