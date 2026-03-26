'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faqs = [
  { q: 'What lanes do you cover?', a: 'We operate across all 48 contiguous states with primary corridors in the Midwest and Southeast.' },
  { q: 'Do you hire owner-operators?', a: 'Yes. We work with both company drivers and qualified owner-operators with their own authority.' },
  { q: 'What equipment do you run?', a: 'Our fleet consists of late-model Peterbilt 579s and 389s. All trucks are under 3 years old.' },
  { q: 'How do I get a freight quote?', a: 'Fill out our contact form or call dispatch directly. We respond within 2 business hours.' },
  { q: 'What is your on-time delivery rate?', a: 'We maintain a 98.6% on-time delivery rate across all routes, tracked monthly.' },
  { q: 'How do I apply as a CDL-A driver?', a: "Click 'Apply now' at the top of this page or visit our Contact page and select 'Driver application'." },
]

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <motion.section
      className="py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-display font-bold text-[clamp(32px,4vw,48px)] text-text-primary mb-10">Common questions</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-text-primary font-body font-medium">{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="text-accent flex-shrink-0" size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' as const }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-text-secondary font-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
