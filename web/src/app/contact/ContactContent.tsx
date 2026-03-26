'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

// Inline SVG social icons (lucide-react v1.7+ removed social brand icons)
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

type FormData = {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
  }

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary">
            Let&apos;s talk freight
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <p className="text-text-secondary font-body text-base leading-relaxed mb-10">
              Whether you need a quote, want to join our team, or just have a question — reach out. We respond within 2 business hours.
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <span className="text-text-primary font-body text-sm">842 Industrial Pkwy, Joliet, IL 60431</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <span className="text-text-primary font-body text-sm">+1 (815) 555-0174</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <span className="text-text-primary font-body text-sm">dispatch@transnatur.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div className="font-body text-sm text-text-secondary">
                  <div>Mon–Fri 6am–10pm</div>
                  <div>Sat 8am–4pm</div>
                  <div>24/7 emergency dispatch</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors"><LinkedinIcon /></a>
              <a href="#" aria-label="Facebook" className="text-text-secondary hover:text-accent transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-accent transition-colors"><InstagramIcon /></a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            {submitted ? (
              <div className="bg-surface border border-accent rounded-lg p-10 text-center">
                <CheckCircle className="text-accent mx-auto mb-4" size={48} />
                <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Message received!</h3>
                <p className="text-text-secondary font-body">We&apos;ll get back to you within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-1">Full name *</label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Smith"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1 font-body">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-1">Email address *</label>
                  <input
                    {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })}
                    type="email"
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-body">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-1">Phone number</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-1">Subject *</label>
                  <select
                    {...register('subject', { required: 'Please select a subject' })}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="freight-quote">Freight quote</option>
                    <option value="driver-application">Driver application</option>
                    <option value="general-inquiry">General inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-xs mt-1 font-body">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-1">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Message must be at least 20 characters' } })}
                    rows={5}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-text-primary font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your freight needs or inquiry..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">Send message</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
