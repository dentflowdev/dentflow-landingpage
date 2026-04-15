import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      badge: 'Getting Started',
      description: 'For growing labs starting with structured order workflows.',
      price: '₹1,499',
      period: '/month',
      features: [
        'Up to 500 orders',
        'All features included',
        '₹3 per additional order',
      ],
      popular: false,
      cta: 'Choose Starter',
    },
    {
      name: 'Growth',
      badge: '⭐ Most Popular',
      description: 'Balanced scale for labs with increasing monthly order volume.',
      price: '₹2,499',
      period: '/month',
      features: [
        'Up to 1,000 orders',
        'All features included',
        '₹3 per additional order',
      ],
      popular: true,
      cta: 'Choose Growth',
    },
    {
      name: 'Pro',
      badge: 'Best Value',
      description: 'For high-performing labs handling larger case throughput.',
      price: '₹4,499',
      period: '/month',
      features: [
        'Up to 2,000 orders',
        'All features included',
        '₹3 per additional order',
      ],
      popular: false,
      cta: 'Choose Pro',
    },
    {
      name: 'Enterprise',
      badge: 'Scale Without Limits',
      description: 'Built for high-volume labs needing maximum operational scale.',
      price: '₹7,999',
      period: '/month',
      features: [
        'Unlimited orders',
        'All features included',
        'Priority support',
        'Built for high-volume labs',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <Section id="pricing" tinted>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Simple, Scalable Pricing for Every Lab
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              All features included. Choose a plan based on your monthly order volume.
            </p>
            <div className="mt-5 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-dark">
              14 Days Free Trial
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <div
                className={clsx(
                  'h-full rounded-3xl p-8 flex flex-col relative border transition-shadow duration-300',
                  plan.popular
                    ? 'bg-primary text-white shadow-xl border-primary md:scale-[1.02] md:-my-1'
                    : 'bg-card border-border shadow-sm hover:shadow-md text-dark'
                )}
              >
                <div
                  className={clsx(
                    'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md whitespace-nowrap',
                    plan.popular
                      ? 'bg-accent text-white'
                      : 'bg-tint text-dark border border-border'
                  )}
                >
                  {plan.badge}
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={clsx(
                    'text-sm mb-6 leading-relaxed',
                    plan.popular ? 'text-white/85' : 'text-muted'
                  )}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className={clsx('text-lg', plan.popular ? 'text-white/80' : 'text-muted')}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={clsx('shrink-0 mt-0.5', plan.popular ? 'text-white' : 'text-primary')}
                      />
                      <span className={clsx('text-sm font-medium', plan.popular ? 'text-white' : 'text-dark')}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'secondary' : 'primary'}
                  className="w-full justify-center"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <p className="text-center mt-10 text-base md:text-lg font-semibold text-dark">
            No feature restrictions. No hidden charges. Upgrade anytime.
          </p>
          <p className="text-center mt-3 text-sm text-muted">
            Fair usage policy applies for enterprise plans.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
