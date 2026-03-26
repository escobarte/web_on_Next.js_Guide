'use client'
import { motion } from 'framer-motion'
import { Truck, Package, Zap, Map, Radio, Headphones } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CtaBanner } from '@/components/sections/CtaBanner'

const services = [
  { icon: Truck, title: 'Full Truckload (FTL)', desc: 'Door-to-door FTL across all 48 states. Dedicated lanes, competitive rates, and a driver assigned exclusively to your load.' },
  { icon: Package, title: 'Partial Load (LTL)', desc: 'LTL options for smaller shipments. Pay only for the space you use. Perfect for regional distribution and spot loads.' },
  { icon: Zap, title: 'Express Delivery', desc: 'Time-sensitive cargo handled with priority routing and real-time updates. Available 24/7 for urgent shipments.' },
  { icon: Map, title: 'Route Planning', desc: 'Optimized routes with live traffic data. Fewer delays, lower fuel costs, and predictable delivery windows.' },
  { icon: Radio, title: 'Real-time Tracking', desc: 'GPS tracking on every truck. Know where your load is at all times through our dispatch portal or direct contact.' },
  { icon: Headphones, title: '24/7 Dispatch', desc: 'Round-the-clock dispatch team. Someone always picks up the phone. No voicemail boxes during critical delivery windows.' },
]

const steps = [
  { num: '01', title: 'Request a quote', desc: 'Fill the form or call dispatch directly. We respond within 2 business hours.' },
  { num: '02', title: 'Confirm your lane', desc: 'We confirm your lane and rate. Transparent pricing with no hidden fees.' },
  { num: '03', title: 'Driver picks up', desc: 'Driver is dispatched. You receive a live tracking link immediately.' },
  { num: '04', title: 'Delivery confirmed', desc: 'Delivery confirmed. Invoice sent. Clean, simple, done.' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ServicesContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Services</SectionLabel>
            <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary mb-4">What we offer</h1>
            <p className="text-text-secondary font-body text-lg max-w-2xl">
              From full truckload to express delivery — we have the capacity, equipment, and team to move your freight reliably across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-surface border border-border rounded-lg p-8 transition-all duration-200 hover:border-accent"
              >
                <s.icon className="text-accent mb-4" size={32} />
                <h3 className="font-display font-bold text-xl text-text-primary mb-3">{s.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-accent font-body text-sm font-medium cursor-pointer hover:underline">Learn more →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        className="py-24 bg-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeInUp}>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-text-primary mb-16">
              From quote to delivery in 4 steps
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px border-t border-dashed border-accent z-10 -translate-x-4" />
                )}
                <div className="font-display font-bold text-4xl text-accent mb-3">{step.num}</div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CtaBanner />
    </>
  )
}
