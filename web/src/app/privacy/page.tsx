import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Transnatur INC',
  description: 'Privacy Policy for Transnatur INC. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  const sections = [
    { id: 'information', title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you fill out a contact form, request a freight quote, or apply for a driver position. This may include your name, email address, phone number, company name, and details about your freight needs. We also collect information automatically when you use our website, including IP addresses, browser type, operating system, pages visited, and time spent on pages.' },
    { id: 'usage', title: 'How We Use It', content: 'We use the information we collect to respond to your inquiries and provide freight services, process driver and owner-operator applications, send transactional communications related to your shipments, improve our website and service offerings, comply with legal obligations, and prevent fraud and ensure security. We do not sell, rent, or share your personal information with third parties for their own marketing purposes.' },
    { id: 'cookies', title: 'Cookies', content: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience. We use essential cookies required for the website to function, analytics cookies to understand how visitors use our site (via Google Analytics), and preference cookies to remember your settings. You can control cookie settings through your browser. Disabling certain cookies may limit functionality of the site.' },
    { id: 'third-parties', title: 'Third Parties', content: 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, including web hosting providers, analytics services (Google Analytics), and email communication platforms. These parties are contractually obligated to keep your information confidential and use it only for the specific services they provide to us. We may also disclose information when required by law or to protect the rights and safety of Transnatur INC and its users.' },
    { id: 'rights', title: 'Your Rights', content: 'Depending on your location, you may have the right to access personal information we hold about you, request correction of inaccurate data, request deletion of your personal information, object to or restrict processing of your data, and receive a copy of your data in a portable format. To exercise any of these rights, please contact us at dispatch@transnatur.com. We will respond to all legitimate requests within 30 days.' },
    { id: 'contact', title: 'Contact', content: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: Transnatur INC, 842 Industrial Pkwy, Joliet, IL 60431. Email: dispatch@transnatur.com. Phone: +1 (815) 555-0174. We are committed to resolving any privacy concerns you may have.' },
  ]

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-text-primary mb-2">Privacy Policy</h1>
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

        {/* Content */}
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
