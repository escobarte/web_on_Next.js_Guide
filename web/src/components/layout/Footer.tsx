import Link from 'next/link'

// Inline SVG social icons (lucide-react v1.7+ removed social brand icons)
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="font-display font-bold text-2xl text-text-primary mb-2">
              TRANSNATUR <span className="text-accent">INC</span>
            </div>
            <p className="text-text-secondary text-sm font-body">Moving cargo. Building trust.</p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold text-text-primary text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['/', '/about', '/services', '/blog', '/contact'].map((href, i) => (
                <li key={href}>
                  <Link href={href} className="text-text-secondary hover:text-accent text-sm font-body transition-colors">
                    {['Home', 'About', 'Services', 'Blog', 'Contact'][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold text-text-primary text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Full Truckload', 'Partial Load', 'Express Delivery', 'Real-time Tracking', '24/7 Dispatch'].map(s => (
                <li key={s}>
                  <span className="text-text-secondary text-sm font-body">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold text-text-primary text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-text-secondary hover:text-accent text-sm font-body transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-text-secondary hover:text-accent text-sm font-body transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm font-body">© 2025 Transnatur INC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors"><LinkedinIcon /></a>
            <a href="#" aria-label="Facebook" className="text-text-secondary hover:text-accent transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-accent transition-colors"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
