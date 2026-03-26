'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const words = ['Built', 'for', 'the', 'road.', 'Trusted', 'by', 'shippers.']

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #1F1F1F 0%, #111111 70%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.h1
              className="font-display font-bold text-[clamp(48px,7vw,80px)] text-text-primary leading-tight mb-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span key={i} variants={fadeInUp} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-text-secondary text-lg font-body leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Transnatur INC delivers full truckload and partial freight across the US. CDL-A drivers wanted — join our modern Peterbilt fleet.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button variant="primary" size="lg">Apply now</Button>
              <Button variant="ghost" size="lg">See our services</Button>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="https://placehold.co/560x420/1F1F1F/C79A1B"
              alt="Transnatur freight truck on highway"
              width={560}
              height={420}
              className="rounded-lg border border-border"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
