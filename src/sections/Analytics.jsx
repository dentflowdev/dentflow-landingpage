import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ChartLine } from '../components/ChartLine';
import { clsx } from 'clsx';
import { BarChart3, Clock3, Target } from 'lucide-react';

export function Analytics() {
  const bars = [42, 58, 48, 66, 52, 72, 60, 78, 70, 85, 76, 92];

  return (
    <Section id="analytics" tinted>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <FadeIn>
            <p className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Analytics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Dashboards that match how labs actually work
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Spot bottlenecks early, compare 7- and 30-day trends, and prove delivery precision to
              partners — without exporting to a spreadsheet first.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="bg-card rounded-2xl border border-border shadow-[0_20px_60px_-28px_rgba(24,59,86,0.18)] p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-10">
              <div>
                <h3 className="text-xl font-bold text-dark">Performance overview</h3>
                <p className="text-sm text-muted mt-1">Last 30 days vs. prior period · sample data</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['7D', '30D', '3M', '1Y'].map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    className={clsx(
                      'px-3.5 py-1.5 text-sm font-medium rounded-lg border transition-colors',
                      i === 1
                        ? 'bg-white border-primary text-primary shadow-sm'
                        : 'border-transparent text-muted hover:bg-white/80 hover:border-border'
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 lg:mb-10">
              <div className="bg-base border border-border rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-muted mb-3">
                  <BarChart3 size={16} className="text-primary" />
                  Total orders
                </div>
                <div className="flex items-end gap-2 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold text-dark tabular-nums">
                    <AnimatedCounter value={1248} />
                  </span>
                  <span className="text-sm font-semibold text-accent mb-1.5">+12.5%</span>
                </div>
                <p className="text-xs text-muted mt-2">Volume trending up week over week</p>
              </div>

              <div className="bg-base border border-border rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-muted mb-3">
                  <Clock3 size={16} className="text-accent" />
                  Avg. turnaround
                </div>
                <div className="flex items-end gap-2 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold text-dark tabular-nums">
                    <AnimatedCounter value={3.2} decimals={1} />
                  </span>
                  <span className="text-lg font-semibold text-muted mb-1">days</span>
                  <span className="text-sm font-semibold text-accent mb-1.5">−8%</span>
                </div>
                <p className="text-xs text-muted mt-2">Stage-level timestamps highlight delays</p>
              </div>

              <div className="bg-base border border-border rounded-2xl p-5 md:p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-muted mb-3">
                  <Target size={16} className="text-primary" />
                  On-time delivery
                </div>
                <div className="flex items-end gap-2 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold text-dark tabular-nums">
                    <AnimatedCounter value={98.4} decimals={1} suffix="%" />
                  </span>
                  <span className="text-sm font-semibold text-accent mb-1.5">+2.1%</span>
                </div>
                <p className="text-xs text-muted mt-2">Delivery precision tracked per clinic</p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">
              <div className="xl:col-span-3 bg-base border border-border rounded-2xl p-5 md:p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-dark">Order trends</p>
                    <p className="text-xs text-muted">Daily volume · smoothed</p>
                  </div>
                  <span className="text-xs font-medium text-accent">↑ 9.2% vs prior</span>
                </div>
                <ChartLine className="w-full h-auto" />
              </div>

              <div className="xl:col-span-2 bg-base border border-border rounded-2xl p-5 md:p-6 flex flex-col">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-dark">Delivery performance</p>
                  <p className="text-xs text-muted">Shipped within promised window</p>
                </div>
                <div className="h-36 flex items-end gap-1.5">
                  {bars.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-primary/15 hover:bg-primary/35 transition-colors min-h-[8%]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-muted uppercase tracking-wide font-medium">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Efficiency', body: 'Compare in-progress vs. delayed orders by technician and stage.' },
                { title: 'Doctor breakdown', body: 'See which accounts drive volume and turnaround variance.' },
                { title: 'Exports', body: 'Download Excel packs for 7d–1y with charts embedded for leadership reviews.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-white/70 backdrop-blur-sm px-5 py-4"
                >
                  <p className="text-sm font-bold text-dark mb-1">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
