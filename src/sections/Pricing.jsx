import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

export function Pricing() {
  const plans = [
    {
      name: 'Basic',
      description: 'Core visibility for lean teams modernizing intake and tracking.',
      price: '$99',
      period: '/month',
      features: [
        'Up to 150 orders / month',
        '5 team seats · lab code onboarding',
        'Live stages & timestamps',
        '7-day analytics snapshot',
        'Email support',
      ],
      popular: false,
      cta: 'Start free trial',
    },
    {
      name: 'Pro',
      description: 'The operational stack growing labs use to scale without losing control.',
      price: '$249',
      period: '/month',
      features: [
        'Unlimited orders',
        'Advanced analytics (7d / 30d) + exports',
        'Excel reports: 7d, 1m, 3m, 6m, 1y',
        'RBAC, activity tracking & delayed-order alerts',
        'Priority support & success check-ins',
      ],
      popular: true,
      cta: 'Start free trial',
    },
    {
      name: 'Enterprise',
      description: 'Security, integrations, and governance for multi-site lab groups.',
      price: 'Custom',
      period: '',
      features: [
        'Dedicated success & solution design',
        'SSO, audit trails, custom retention',
        'API & scanner / ERP integrations',
        'Volume pricing & SLA-backed support',
        'Optional private cloud deployment',
      ],
      popular: false,
      cta: 'Talk to sales',
    },
  ];

  return (
    <Section id="pricing" tinted>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Plans that scale with production</h2>
            <p className="text-lg text-muted leading-relaxed">
              Clinicians join at no platform fee — labs pick a tier that matches order volume, analytics depth,
              and compliance needs.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
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
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                    Most popular
                  </div>
                )}

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
      </Container>
    </Section>
  );
}
