import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { StoreDownloadButtons } from '../components/StoreDownloadButtons';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Package } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-28 overflow-x-hidden relative">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[min(1000px,100vw)] h-[480px] bg-primary/[0.06] rounded-full blur-3xl -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-dark text-sm font-medium mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
                New: production stages & Excel exports
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold tracking-tight text-dark leading-[1.08] mb-6">
                Streamline{' '}
                <span className="text-primary">Dental Lab</span>
                <br className="hidden sm:block" /> Operations & Orders
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-lg md:text-xl text-dark/85 mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Real-time tracking, analytics, and collaboration — built for labs and dentists who need
                visibility without the back-and-forth.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" className="w-full sm:w-auto group shadow-md hover:shadow-lg">
                  Start Free Trial
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Play size={18} className="mr-2" />
                  Book Demo
                </Button>
              </div>
            </FadeIn>

            <div className="mt-8">
              <StoreDownloadButtons />
            </div>

            <FadeIn delay={0.36}>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-dark/80">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-accent shrink-0" /> No credit card
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-accent shrink-0" /> 14-day trial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-accent shrink-0" /> SOC2-ready workflows
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <FadeIn delay={0.28} direction="left">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 rounded-2xl border border-border bg-card shadow-[0_24px_80px_-24px_rgba(24,59,86,0.25)] overflow-hidden"
              >
                <div className="h-11 border-b border-border bg-tint/80 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5" aria-hidden>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E8A5A5]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E8D4A5]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A5D9A5]" />
                  </div>
                  <div className="ml-3 flex-1 h-7 rounded-lg bg-white/90 border border-border text-xs text-dark/70 flex items-center px-3">
                    app.dentflow.io / lab / orders
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Today</p>
                      <p className="text-lg font-bold text-dark">Order pipeline</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-tint text-primary border border-border">
                      Live sync
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-xl bg-base border border-border p-4">
                      <div className="flex items-center gap-2 text-muted text-xs font-medium mb-2">
                        <Package size={14} className="text-primary" />
                        Active orders
                      </div>
                      <p className="text-2xl font-bold text-dark">47</p>
                      <p className="text-xs text-accent font-medium mt-1">+6 vs yesterday</p>
                    </div>
                    <div className="rounded-xl bg-tint/60 border border-primary/15 p-4">
                      <div className="flex items-center gap-2 text-muted text-xs font-medium mb-2">
                        <TrendingUp size={14} className="text-accent" />
                        On-time delivery
                      </div>
                      <p className="text-2xl font-bold text-dark">98.4%</p>
                      <p className="text-xs text-muted mt-1">rolling 30 days</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-base p-4">
                    <div className="flex justify-between items-end gap-2 h-28">
                      {[38, 52, 44, 61, 55, 72, 68, 80, 74, 88, 82, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-primary/25 to-primary/80 min-h-[12%]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-[10px] text-muted font-medium uppercase tracking-wide">
                      <span>Week 1</span>
                      <span>Week 4</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 max-w-[280px]"
            >
              <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <CheckCircle2 size={22} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-dark truncate">Stage updated</p>
                <p className="text-xs text-muted">Crown #1042 · QC passed · 2m ago</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
