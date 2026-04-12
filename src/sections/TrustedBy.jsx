import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function TrustedBy() {
  const brands = [
    { name: 'SmileWorks Lab', abbr: 'SW' },
    { name: 'Apex Dental Studio', abbr: 'AD' },
    { name: 'Lumina Prosthodontics', abbr: 'LP' },
    { name: 'Precision Craft', abbr: 'PC' },
    { name: 'Nova Chairside', abbr: 'NC' },
  ];

  return (
    <section className="py-12 md:py-14 border-y border-border bg-base overflow-hidden">
      <Container>
        <FadeIn>
          <p className="text-center text-xs md:text-sm font-semibold text-muted mb-8 uppercase tracking-[0.2em]">
            Trusted by labs & multi-location clinics
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex items-center gap-3 text-dark/45 hover:text-dark/80 transition-colors duration-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-xs font-bold text-primary shadow-sm">
                  {b.abbr}
                </span>
                <span className="text-sm md:text-base font-semibold tracking-tight max-w-[140px] leading-snug">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
