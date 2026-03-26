import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Transnatur INC',
  description: 'Terms of Service for Transnatur INC freight and trucking services.',
}

export default function TermsPage() {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', content: 'By accessing or using the Transnatur INC website or services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.' },
    { id: 'services', title: 'Services', content: 'Transnatur INC provides freight transportation and logistics services including full truckload (FTL), less-than-truckload (LTL), express delivery, and dispatch services across the contiguous United States. Service availability, rates, and lane coverage are subject to change without notice. All service agreements are subject to carrier terms and applicable federal regulations under FMCSA authority.' },
    { id: 'payment', title: 'Payment Terms', content: 'Payment terms are net 30 days from invoice date unless otherwise agreed in writing. Invoices not paid within terms may be subject to a 1.5% monthly finance charge. All rates are subject to applicable fuel surcharges, accessorial charges, and tariff adjustments. Disputed invoices must be submitted in writing within 15 days of invoice date. Undisputed portions of invoices remain due and payable per terms.' },
    { id: 'liability', title: 'Liability', content: 'Transnatur INC liability for loss or damage to freight is governed by applicable federal motor carrier regulations (49 CFR Part 370) and the Carmack Amendment. Our liability is limited to the actual value of the freight or the released valuation declared on the bill of lading, whichever is lower. We are not liable for consequential, incidental, or indirect damages. Maximum liability shall not exceed $100,000 per occurrence unless additional declared value coverage is purchased in advance.' },
    { id: 'disputes', title: 'Disputes', content: 'Any dispute arising out of or relating to these Terms or the services provided by Transnatur INC shall be resolved through binding arbitration in accordance with the American Arbitration Association commercial arbitration rules. The arbitration shall take place in Will County, Illinois. Each party shall bear its own legal fees and costs. Claims for collection of unpaid freight charges are not subject to mandatory arbitration and may be pursued in courts of competent jurisdiction.' },
    { id: 'governing-law', title: 'Governing Law', content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Federal motor carrier regulations and the laws of the United States shall apply where applicable. You consent to the exclusive jurisdiction of state and federal courts located in Will County, Illinois for any disputes not subject to arbitration under these terms.' },
  ]

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary mb-2">Terms of Service</h1>
          <p className="text-text-secondary font-body text-sm">Last updated: January 2025</p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-surface border border-border rounded-lg p-6 mb-12">
          <h2 className="font-display font-bold text-lg text-text-primary mb-4">Contents</h2>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-accent font-body text-sm hover:underline">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="space-y-12">
          {sections.map(s => (
            <div key={s.id} id={s.id}>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-4">{s.title}</h2>
              <p className="text-text-secondary font-body text-base leading-relaxed">{s.content}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
