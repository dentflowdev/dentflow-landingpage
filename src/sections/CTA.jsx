import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { StoreDownloadButtons } from '../components/StoreDownloadButtons';
import { FadeIn } from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <Section className="py-20 md:py-28 relative overflow-hidden border-y border-primary/20">
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-accent/25 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden />

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Start managing your lab smarter today
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
            Spin up a workspace in minutes, invite your team with lab codes, and give dentists live visibility
            before the next case ships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto px-8 shadow-lg group"
            >
              Start free trial
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 border-white/35 text-white hover:bg-white/10 hover:border-white"
            >
              Book a live demo
            </Button>
          </div>
        </FadeIn>
        <StoreDownloadButtons
          label="Or install the mobile app"
          align="center"
          className="mt-10 max-w-3xl mx-auto [&_p]:text-white/75 [&_a]:ring-white/15"
        />
      </Container>
    </Section>
  );
}
