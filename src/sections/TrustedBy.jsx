import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

/** Labs shown in the scrolling strip (duplicated in DOM for seamless loop). */
const REGISTERED_LABS = [
  'SmileWorks Lab',
  'Apex Dental Studio',
  'Lumina Prosthodontics',
  'Precision Craft',
  'Nova Chairside',
  'Bayview Dental Lab',
  'NorthStar Ceramics',
  'Clearline Ortho Lab',
];

export function TrustedBy() {
  const loop = [...REGISTERED_LABS, ...REGISTERED_LABS];

  return (
    <section className="border-y border-border bg-base overflow-hidden">
      <Container className="py-10 md:py-12">
        <FadeIn>
          <p className="text-center text-sm font-semibold text-dark md:text-base">
            Trusted by labs & multi-location clinics
          </p>
        </FadeIn>
      </Container>

      {/* Registered labs — continuous right → left scroll */}
      <div className="border-t border-border bg-tint">
        <p className="text-center text-xs font-bold text-dark uppercase tracking-[0.2em] pt-4 pb-1">
          Registered labs
        </p>
        <div className="relative overflow-hidden pb-5 pt-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-tint to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-tint to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="flex w-max animate-labs-marquee will-change-transform motion-reduce:animate-none"
            aria-hidden
          >
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-2.5 whitespace-nowrap px-8 py-1 text-base font-semibold text-dark sm:px-10 sm:text-lg"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-sm ring-2 ring-primary/25" />
                {name}
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">
          Registered labs include: {REGISTERED_LABS.join(', ')}.
        </p>
      </div>
    </section>
  );
}
