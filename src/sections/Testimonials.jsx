import { Star } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'We finally have one place to see delayed cases before they become fire drills. Technicians know their work is visible, and doctors stopped flooding our front desk line.',
      author: 'Sarah Jenkins',
      role: 'Operations lead, Precision Prosthetics',
      rating: 5,
    },
    {
      quote:
        'I used to budget an hour a day calling labs. Now I open Dentflow between patients and know exactly which case is milling, finishing, or out for delivery.',
      author: 'Dr. Michael Chen',
      role: 'Clinical director, Apex Dental Group',
      rating: 5,
    },
    {
      quote:
        'The analytics package pays for itself in partner conversations. We can show turnaround trends and on-time delivery with the same rigor as our QC logs.',
      author: 'David Ross',
      role: 'Owner, SmileWorks Lab',
      rating: 5,
    },
  ];

  return (
    <Section tinted>
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <FadeIn>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Proof</p>
            <h2
              className="mb-4 text-3xl font-bold md:text-4xl"
              style={{ color: '#183B56' }}
            >
              Teams shipping with Dentflow
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(24, 59, 86, 0.9)' }}
            >
              From regional labs to growing DSOs - teams adopt Dentflow when phone tag stops scaling.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <Card className="flex h-full flex-col bg-card p-6 md:p-8">
                <div className="mb-5 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className="fill-amber-400/90 text-amber-500/80"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote
                  className="mb-8 flex-1 text-[15px] font-normal not-italic leading-relaxed md:text-base"
                  style={{ color: '#183B56' }}
                >
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="mt-auto flex items-center gap-4 border-t border-border/80 pt-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-tint text-lg font-bold text-primary">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-dark">{t.author}</div>
                    <div className="text-xs text-dark/75">{t.role}</div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
