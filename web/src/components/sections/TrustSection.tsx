'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const points = [
  'DOT licensed and fully certified',
  'GPS tracking on every load',
  'No hidden fees — transparent invoicing',
  'On-time delivery guarantee or we make it right',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function TrustSection() {
  return (
    <motion.section
      className="py-24"
      style={{ background: '#1A1A1A' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-text-primary leading-tight mb-6">
              Built on trust.<br />Backed by miles.
            </h2>
            <p className="text-text-secondary font-body leading-relaxed text-base">
              Since 2012, Transnatur INC has built a reputation on doing what we say. No excuses, no surprises — just reliable freight service that shippers and drivers count on every day.
            </p>
          </motion.div>

          <motion.div className="space-y-5" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            {points.map((point, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <span className="text-text-primary font-body text-base">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
