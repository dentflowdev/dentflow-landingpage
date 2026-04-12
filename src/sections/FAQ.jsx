import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to go live?',
      answer:
        'Most labs invite their team, configure roles, and start routing orders the same day. Dentists can join with a short invite — no IT project required.',
    },
    {
      question: 'Do dentists pay to use Dentflow?',
      answer:
        'No. Dentists and clinics use Dentflow at no platform fee. Labs subscribe based on features, seats, and volume; clinical teams only pay their lab for actual work.',
    },
    {
      question: 'What if some referring doctors are not on the platform?',
      answer:
        'Labs can create offline orders for walk-in or phone prescriptions so production, QA, and dispatch stay inside one system — even when the doctor is not registered yet.',
    },
    {
      question: 'How do lab codes and RBAC work?',
      answer:
        'Each lab receives a unique code for onboarding. Administrators assign roles (e.g., intake, bench, QC) so people only see what they need — a requirement for growing teams.',
    },
    {
      question: 'Can we export data for leadership or compliance reviews?',
      answer:
        'Yes. Export detailed Excel workbooks for 7d, 1m, 3m, 6m, and 1y windows, including orders, doctor breakdowns, and chart snapshots your board already expects.',
    },
    {
      question: 'Is patient and case data protected?',
      answer:
        'Dentflow is architected for healthcare expectations: encryption in transit and at rest, strict access controls, and audit-friendly activity history for regulated environments.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <Container>
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Answers for operators and clinicians</h2>
            <p className="text-lg text-muted leading-relaxed">
              Straightforward details on rollout, pricing dynamics, and how Dentflow fits your compliance stack.
            </p>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <StaggerItem key={faq.question}>
                  <div
                    className={clsx(
                      'border border-border rounded-2xl overflow-hidden transition-colors duration-300 bg-card',
                      open ? 'border-primary/50 shadow-md' : 'hover:border-primary/30'
                    )}
                  >
                    <button
                      type="button"
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                      onClick={() => setOpenIndex(open ? -1 : index)}
                      aria-expanded={open}
                    >
                      <span className="font-bold text-dark text-[15px] sm:text-base pr-2">{faq.question}</span>
                      <ChevronDown
                        className={clsx(
                          'text-primary transition-transform duration-300 shrink-0',
                          open && 'rotate-180'
                        )}
                        size={20}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 text-muted text-[15px] leading-relaxed border-t border-border/60 pt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
