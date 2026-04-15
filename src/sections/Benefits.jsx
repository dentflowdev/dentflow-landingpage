import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Check } from 'lucide-react';

export function Benefits() {
  const whyDentoLabs = [
    'No more manual coordination: everything is structured and trackable.',
    'Clear visibility for everyone: doctors, staff, and admin stay aligned.',
    'Faster operations: reduce delays caused by communication gaps.',
    'Data-driven decisions: analytics and reports give real insights.',
  ];

  const targetUsers = [
    'Dental Labs',
    'Lab Owners',
    'Lab Technicians',
    'Receptionists',
    'Dentists / Clinics',
  ];

  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Why Dento Labs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Built for every role in your workflow</h2>
            <p className="text-lg text-muted leading-relaxed">
              Replace manual back-and-forth with one shared system where teams move faster and stay aligned.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <FadeIn direction="right">
            <div className="bg-tint rounded-3xl p-8 md:p-10 border border-border h-full shadow-sm">
              <h3 className="text-2xl font-bold text-dark mb-3">Why Dento Labs</h3>
              <p className="text-muted mb-8 leading-relaxed">
                DentoLabs gives your team a single source of truth from order intake to final delivery.
              </p>
              <ul className="space-y-4">
                {whyDentoLabs.map((benefit, i) => (
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
              <h3 className="text-2xl font-bold text-dark mb-3 relative z-10">Target Users</h3>
              <p className="text-muted mb-8 leading-relaxed relative z-10">
                Built for dental labs and clinics that need structured operations and real-time visibility.
              </p>
              <ul className="space-y-4 relative z-10">
                {targetUsers.map((benefit, i) => (
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
