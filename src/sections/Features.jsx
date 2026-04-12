import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import {
  Activity,
  Building2,
  LayoutDashboard,
  BarChart3,
  Shield,
  UserCheck,
  WifiOff,
  FileSpreadsheet,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Activity size={22} className="text-primary" />,
      title: 'Live order tracking',
      description:
        'Doctors follow every stage with timestamps — fewer calls, clearer expectations, faster chairside planning.',
    },
    {
      icon: <Building2 size={22} className="text-accent" />,
      title: 'Multi-lab ordering',
      description:
        'Route work to any registered lab from one account while preserving case history and preferences.',
    },
    {
      icon: <LayoutDashboard size={22} className="text-primary" />,
      title: 'Lab dashboard overview',
      description:
        'At-a-glance views for new, in-progress, delayed, and delivered orders with filters that match your floor.',
    },
    {
      icon: <BarChart3 size={22} className="text-accent" />,
      title: 'Analytics & insights',
      description:
        '7- and 30-day trends, throughput, and delivery precision — export-ready when leadership asks “why”.',
    },
    {
      icon: <Shield size={22} className="text-primary" />,
      title: 'RBAC & team roles',
      description:
        'Granular permissions and unique lab codes keep contractors, technicians, and admins in the right lane.',
    },
    {
      icon: <UserCheck size={22} className="text-accent" />,
      title: 'Team activity tracking',
      description:
        'See which teammate touched an order, what changed, and when — ideal for QA and coaching moments.',
    },
    {
      icon: <WifiOff size={22} className="text-primary" />,
      title: 'Offline order creation',
      description:
        'Log paper or phone prescriptions as structured orders so production stays in one system of record.',
    },
    {
      icon: <FileSpreadsheet size={22} className="text-accent" />,
      title: 'Excel reports export',
      description:
        'One-click packs for 7d, 1m, 3m, 6m, and 1y with orders, doctor breakdowns, and embedded chart snapshots.',
    },
  ];

  return (
    <Section id="features" tinted>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Purpose-built for dental production workflows
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Everything in Dentflow maps to how cases actually move — from prescription to bench to
              dispatch — without bolting on generic project tools.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full flex flex-col items-start text-left bg-card p-6 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-tint flex items-center justify-center mb-5 border border-border/80">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{feature.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
