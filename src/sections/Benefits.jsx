import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Check } from 'lucide-react';

export function Benefits() {
  const labBenefits = [
    'Better workflow control across new, in-progress, delayed, and delivered work',
    'Team accountability with per-order activity and timestamps',
    'Fewer remakes and miscommunications with a single source of truth',
  ];

  const dentistBenefits = [
    'Transparency into every stage without calling the lab',
    'Faster communication through structured updates and alerts',
    'Real-time progress visibility for every case you send',
  ];

  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Built for labs and chairside teams</h2>
            <p className="text-lg text-muted leading-relaxed">
              Dentflow aligns incentives: labs run predictable production, dentists get clarity — without
              another inbox to babysit.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <FadeIn direction="right">
            <div className="bg-tint rounded-3xl p-8 md:p-10 border border-border h-full shadow-sm">
              <h3 className="text-2xl font-bold text-dark mb-3">For labs</h3>
              <p className="text-muted mb-8 leading-relaxed">
                Run production with the same rigor as your quality control — dashboards, roles, and exports
                that leadership actually asks for.
              </p>
              <ul className="space-y-4">
                {labBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex rounded-full bg-white p-1 text-primary shadow-sm border border-border">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="text-dark font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.12}>
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[0_16px_48px_-24px_rgba(24,59,86,0.15)] h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl" aria-hidden />
              <h3 className="text-2xl font-bold text-dark mb-3 relative z-10">For dentists</h3>
              <p className="text-muted mb-8 leading-relaxed relative z-10">
                Know where cases sit, who touched them last, and when to set patient expectations — from one
                secure workspace.
              </p>
              <ul className="space-y-4 relative z-10">
                {dentistBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex rounded-full bg-tint p-1 text-accent shadow-sm border border-border">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="text-dark font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
