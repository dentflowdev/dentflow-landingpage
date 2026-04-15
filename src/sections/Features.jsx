import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import {
  Activity,
  LayoutDashboard,
  Shield,
  UserCog,
  Stethoscope,
  FileSpreadsheet,
  ClipboardList,
  Users,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <ClipboardList size={22} className="text-primary" />,
      title: 'Order Management',
      description:
        'Create detailed lab orders with clinical specifications, attach files and instructions, and move cases from Created to In Progress to Ready to Delivered.',
    },
    {
      icon: <Activity size={22} className="text-accent" />,
      title: 'Real-Time Order Tracking',
      description:
        'Doctors can track every order stage in real time and see exactly when a case moved from one stage to the next.',
    },
    {
      icon: <Shield size={22} className="text-primary" />,
      title: 'Role-Based Access Control',
      description:
        'Admin has full control, receptionists manage order intake, technicians update progress via barcode search, and delivery agents complete final delivery.',
    },
    {
      icon: <Stethoscope size={22} className="text-accent" />,
      title: 'Doctor Management',
      description:
        'Doctors get their own view with graphs, an orders-by-lab section, and lab-wise filters to quickly find and monitor cases.',
    },
    {
      icon: <Users size={22} className="text-primary" />,
      title: 'User Management',
      description:
        'Assign roles to staff dynamically and control access based on responsibilities.',
    },
    {
      icon: <LayoutDashboard size={22} className="text-accent" />,
      title: 'Admin Dashboard',
      description:
        'Track total orders, daily trends, team leaderboard, top doctors, turnaround time (TAT), and delivery performance from one dashboard.',
    },
    {
      icon: <FileSpreadsheet size={22} className="text-accent" />,
      title: 'Data Export & Reports',
      description:
        'Download complete order data in Excel for 7 days, 1 month, 3 months, 6 months, or 1 year with order details, doctor-wise data, and analytics summaries.',
    },
    {
      icon: <UserCog size={22} className="text-primary" />,
      title: 'Doctor Ordering Portal',
      description:
        'Doctors can place orders directly to any registered lab and continue tracking those orders from submission to delivery.',
    },
  ];

  return (
    <Section id="features" tinted>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              One Platform to Manage Your Entire Lab Workflow
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              DentoLabs digitizes your entire dental lab process - from order creation to final delivery -
              with clear tracking and role-based access.
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
