'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Clock, Eye } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CtaBanner } from '@/components/sections/CtaBanner'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const team = [
  { initials: 'AM', name: 'Alex Morgan', title: 'CEO & Founder' },
  { initials: 'JC', name: 'Jamie Chen', title: 'Head of Operations' },
  { initials: 'SR', name: 'Sam Rivera', title: 'Fleet Manager' },
  { initials: 'CP', name: 'Chris Park', title: 'Dispatch Lead' },
]

const values = [
  { icon: Shield, title: 'Reliability', desc: 'We show up on time, every time. Our 98.6% on-time rate is not an accident — it is our standard.' },
  { icon: Clock, title: 'Safety', desc: 'Every truck is inspected before every run. We never compromise on equipment or driver qualifications.' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden fees. No surprise invoices. You always know exactly what you are paying and why.' },
]

const stats = [
  { value: '12 yrs', label: 'In operation' },
  { value: '500+', label: 'Monthly loads' },
  { value: '1M+', label: 'Miles driven' },
  { value: '98.6%', label: 'On-time rate' },
]

export default function AboutContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>About us</SectionLabel>
            <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary mb-4">
              The company behind the cargo
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-2xl">
              Transnatur INC is a family-built freight carrier rooted in the Midwest. We haul what matters, when it matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <SectionLabel>Our story</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-text-primary mb-6">
                From 3 trucks to a full fleet
              </h2>
              <p className="text-text-secondary font-body leading-relaxed mb-4">
                Transnatur INC was founded in 2012 by Alex Morgan with three Peterbilt trucks and a simple promise: never miss a delivery. Starting with regional runs across Illinois and Indiana, we quickly earned a reputation for reliability that spread by word of mouth.
              </p>
              <p className="text-text-secondary font-body leading-relaxed">
                Today we operate a modern fleet of late-model Peterbilts covering all 48 contiguous states. We have grown from a 3-truck operation to a full-service carrier with a dedicated dispatch team, GPS-enabled tracking, and transparent pricing that keeps shippers coming back year after year.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Image
                src="https://placehold.co/560x400/1F1F1F/C79A1B"
                alt="Transnatur fleet on the highway"
                width={560}
                height={400}
                className="rounded-lg border border-border"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <motion.section
        className="py-24 bg-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeInUp}>
            <SectionLabel>Mission & values</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-text-primary mb-12">
              What drives us forward
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-bg border border-border rounded-lg p-6 transition-all duration-200 hover:border-accent"
              >
                <v.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeInUp}>
            <SectionLabel>Our team</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(32px,4vw,44px)] text-text-primary mb-12">
              The people keeping it moving
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-surface border border-border rounded-lg p-6 text-center transition-all duration-200 hover:border-accent"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-bg font-display font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <div className="font-display font-bold text-lg text-text-primary">{member.name}</div>
                <div className="text-text-secondary font-body text-sm mt-1">{member.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="py-16 bg-surface border-y border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className={i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''}>
                <div className="font-display font-bold text-4xl text-accent mb-1">{s.value}</div>
                <div className="text-text-secondary font-body text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <CtaBanner />
    </>
  )
}
