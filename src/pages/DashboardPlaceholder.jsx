import { Container } from '../components/Container';

export function DashboardPlaceholder() {
  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-36">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[0_18px_52px_-28px_rgba(24,59,86,0.25)]">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Logged in</p>
          <h1 className="mb-3 text-3xl md:text-4xl font-bold text-dark">Admin Dashboard Coming Next</h1>
          <p className="text-muted leading-relaxed">
            Login flow is ready. You can now start building the admin dashboard screens here.
          </p>
        </div>
      </Container>
    </section>
  );
}
