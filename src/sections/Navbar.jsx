import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({
  showNavLinks = true,
  isAuthenticated = false,
  onLoginClick,
  onLogout,
  onBrandClick,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-border shadow-sm py-3.5'
          : 'bg-transparent py-5 md:py-6'
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBrandClick}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-dark tracking-tight drop-shadow-sm">
              Dentflow
            </span>
          </button>

          <nav className={clsx('hidden lg:flex items-center gap-8', !showNavLinks && 'invisible')}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-dark/90 hover:text-primary transition-colors drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {showNavLinks && (
              <Button size="sm" className="shadow-sm">
                Get Started
              </Button>
            )}
            {isAuthenticated ? (
              <Button variant="outline" size="sm" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={onLoginClick}>
                Login
              </Button>
            )}
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden text-dark p-2 rounded-lg hover:bg-tint transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border px-4 py-4 shadow-lg flex flex-col gap-1">
            {showNavLinks &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-dark px-3 py-3 rounded-xl hover:bg-tint transition-colors"
                >
                  {link.name}
                </a>
              ))}
            <div className="pt-3 mt-2 border-t border-border space-y-2">
              {showNavLinks && (
                <Button className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Button>
              )}
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout?.();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLoginClick?.();
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
