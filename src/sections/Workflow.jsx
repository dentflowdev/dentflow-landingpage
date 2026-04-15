import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Setup Your Lab',
      description: 'Register your lab and get a unique Lab Code.',
    },
    {
      number: '02',
      title: 'Add Your Team',
      description: 'Staff joins using Lab Code and you assign roles: Admin, Receptionist, Technician, Delivery.',
    },
    {
      number: '03',
      title: 'Start Managing Orders',
      description:
        'Receptionist creates orders, technician updates progress, and delivery completes the final stage.',
    },
    {
      number: '04',
      title: 'Track Everything',
      description: 'Admin monitors performance while doctors track their cases directly in real time.',
    },
  ];

  return (
    <Section id="workflow">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">How it works</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">Run your lab in 4 simple steps</h3>
              <p className="text-lg text-muted mb-10">
                DentoLabs keeps your full operation structured - from onboarding your team to tracking every order stage in one system.
              </p>
            </FadeIn>

            <StaggerContainer className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <StaggerItem key={index} className="flex gap-6 relative">
                  {/* Connecting line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[1.125rem] top-12 bottom-[-2rem] w-[2px] bg-border" />
                  )}
                  
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 shadow-md">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-dark mb-2">{step.title}</h4>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <FadeIn direction="left">
              <div className="relative rounded-2xl bg-tint border border-border p-8 shadow-inner overflow-hidden aspect-square flex flex-col items-center justify-center">
                {/* Decorative UI elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                  {/* Step 1 Mock */}
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-dark">Order Received</div>
                      <div className="text-xs text-muted">Scan uploaded & verified</div>
                    </div>
                  </div>
                  {/* Step 2 Mock */}
                  <div className="bg-white p-4 rounded-xl border border-border shadow-md flex items-center gap-4 ml-6 scale-105">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-dark">In Production</div>
                      <div className="text-xs text-muted">Milling phase started</div>
                    </div>
                  </div>
                  {/* Step 3 Mock */}
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm flex items-center gap-4 opacity-70">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-dark">Ready for Dispatch</div>
                      <div className="text-xs text-muted">Pending quality check</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
