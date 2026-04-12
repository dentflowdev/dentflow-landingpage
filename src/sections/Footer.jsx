import { Container } from '../components/Container';

const link = 'text-muted hover:text-primary text-sm transition-colors';

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-16 pb-10 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-14">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-dark tracking-tight">Dentflow</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
              B2B dental lab operations software — real-time orders, analytics, and RBAC for teams who cannot
              afford another communication gap.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-dark font-semibold">Contact</p>
              <a href="mailto:hello@dentflow.io" className="text-primary font-medium hover:text-primary-hover">
                hello@dentflow.io
              </a>
              <p className="text-muted">San Francisco · Remote-first</p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-dark mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className={link}>
                  Features
                </a>
              </li>
              <li>
                <a href="#workflow" className={link}>
                  Workflow
                </a>
              </li>
              <li>
                <a href="#analytics" className={link}>
                  Analytics
                </a>
              </li>
              <li>
                <a href="#pricing" className={link}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-dark mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className={link}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  Security overview
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  API docs
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-dark mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={link}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className={link}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">© {new Date().getFullYear()} Dentflow, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              className="text-muted hover:text-dark transition-colors"
              aria-label="Dentflow on X"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted hover:text-dark transition-colors"
              aria-label="Dentflow on LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
