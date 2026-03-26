'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function CtaBanner() {
  return (
    <motion.section
      className="bg-accent py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-[clamp(36px,5vw,56px)] text-bg mb-4">
          Ready to move with us?
        </h2>
        <p className="text-bg/70 font-body text-lg mb-8 max-w-xl mx-auto">
          Whether you&apos;re shipping freight or looking for your next driving job — we&apos;re ready.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-bg text-text-primary font-semibold rounded transition-all duration-200 hover:bg-surface text-base"
        >
          Contact us today
        </Link>
      </div>
    </motion.section>
  )
}
