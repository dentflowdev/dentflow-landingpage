import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function TrustedBy() {
  const problems = [
    'Doctors constantly call labs for order status',
    'Receptionists manually search records',
    'Technicians work without structured tracking',
    'Delivery depends on manual coordination',
  ];

  return (
    <section id="problem" className="problem-section border-y border-border bg-base">
      <Container className="py-14 md:py-16">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Problem</p>
            <h2 className="mb-5 text-3xl font-bold text-dark md:text-4xl">
              Still Managing Lab Orders on Calls & Paper?
            </h2>
            <ul className="mx-auto mb-6 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="problem-card rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-dark sm:text-base"
                >
                  {problem}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-muted">
              This leads to delays, confusion, and wasted time.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
