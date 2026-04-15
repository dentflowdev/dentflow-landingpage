export function AdminSectionPage({ title, description }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h1 className="text-2xl font-bold text-dark md:text-3xl">{title}</h1>
      <p className="mt-2 text-muted">{description}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-xl border border-border bg-base p-4">
            <p className="text-sm font-semibold text-dark">{title} Card {item}</p>
            <p className="mt-1 text-xs text-muted">Placeholder content for {title.toLowerCase()} module.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
