import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { Star } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#183B56] mb-4">Teams shipping with Dentflow</h2>
          <p className="text-lg leading-relaxed text-[#183B56]/90">
            From regional labs to growing DSOs — teams adopt Dentflow when phone tag stops scaling.
          </p>
        </div>

        {/* Static grid — no Framer Motion (motion + desktop grid caused invisible text in some browsers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <Card key={t.author} className="h-full flex flex-col bg-card p-6 md:p-8">
              <div className="flex gap-0.5 mb-5" aria-label={`${t.rating} out of 5 stars`}>
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
                “{t.quote}”
              </blockquote>
              <div className="flex items-center gap-4 mt-auto pt-2 border-t border-border/80">
                <div className="w-11 h-11 rounded-full bg-tint flex items-center justify-center text-primary font-bold text-lg border border-border">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#183B56] text-sm">{t.author}</div>
                  <div className="text-xs" style={{ color: 'rgba(24, 59, 86, 0.78)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
