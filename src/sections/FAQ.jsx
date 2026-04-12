import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Container } from '../components/Container';

const FAQ_TEXT = '#183B56';

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
    <Section id="faq" className="faq-section">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* No FadeIn — static copy */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">FAQ</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl faq-heading">Answers for operators and clinicians</h2>
            <p className="text-lg leading-relaxed faq-intro">
              Straightforward details on rollout, pricing dynamics, and how Dentflow fits your compliance stack.
            </p>
          </div>

          {/* No StaggerContainer / StaggerItem — static list (Framer + desktop flex was hiding question text) */}
          <div className="faq-accordion flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={clsx(
                    'faq-item overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300',
                    open ? 'border-primary/50 shadow-md' : 'hover:border-primary/30'
                  )}
                >
                  <button
                    type="button"
                    className="faq-trigger flex w-full min-h-[3.25rem] items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left sm:min-h-0 sm:gap-4 sm:px-6 sm:py-5"
                    style={{
                      color: FAQ_TEXT,
                      WebkitTextFillColor: FAQ_TEXT,
                    }}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span
                      className="min-w-0 flex-1 text-[15px] font-bold leading-snug sm:text-base"
                      style={{
                        color: FAQ_TEXT,
                        WebkitTextFillColor: FAQ_TEXT,
                      }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                        open && 'rotate-180'
                      )}
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
                          className="faq-answer border-t border-border/60 px-5 pt-4 pb-5 text-[15px] leading-relaxed sm:px-6"
                          style={{
                            color: 'rgba(24, 59, 86, 0.95)',
                            WebkitTextFillColor: 'rgba(24, 59, 86, 0.95)',
                          }}
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
