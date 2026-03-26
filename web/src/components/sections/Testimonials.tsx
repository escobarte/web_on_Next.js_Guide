'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const testimonials = [
  { initials: 'RK', name: 'Robert Kline', company: 'Kline Logistics', quote: 'Transnatur has been our go-to carrier for 4 years. Never a missed deadline.' },
  { initials: 'SM', name: 'Sara Mitchell', company: 'MidWest Supply Co', quote: 'The tracking system alone is worth it. We always know exactly where our freight is.' },
  { initials: 'DT', name: 'Dave Torres', company: 'Torres Cold Chain', quote: 'Professional drivers, clean equipment, zero headaches. Highly recommend.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Testimonials() {
  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp}>
          <SectionLabel>What our partners say</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-text-primary mb-12">
            Trusted by shippers and operators
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-lg p-6 transition-all duration-200 hover:border-accent"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-bg font-display font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-text-primary font-semibold font-body text-sm">{t.name}</div>
                  <div className="text-text-secondary font-body text-xs">{t.company}</div>
                </div>
              </div>
              <p className="text-text-secondary font-body text-sm leading-relaxed italic">&quot;{t.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
