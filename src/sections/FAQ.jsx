import { Section } from '../components/Section';
import { Container } from '../components/Container';
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
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#183B56] mb-4">
              Answers for operators and clinicians
            </h2>
            <p className="text-lg leading-relaxed text-[#183B56]/90">
              Straightforward details on rollout, pricing dynamics, and how Dentflow fits your compliance stack.
            </p>
          </div>

          {/* No StaggerContainer — avoids Framer variant + desktop layout issues */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={clsx(
                    'overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300',
                    open ? 'border-primary/50 shadow-md' : 'hover:border-primary/30'
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    style={{ color: '#183B56' }}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span className="pr-2 text-[15px] font-bold sm:text-base" style={{ color: '#183B56' }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'shrink-0 text-primary transition-transform duration-300',
                        open && 'rotate-180'
                      )}
                      size={20}
                      aria-hidden
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
                        <p
                          className="border-t border-border/60 px-5 pt-4 pb-5 text-[15px] leading-relaxed sm:px-6"
                          style={{ color: 'rgba(24, 59, 86, 0.95)' }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
