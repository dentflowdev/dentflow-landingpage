import { Hero } from '../sections/Hero';
import { TrustedBy } from '../sections/TrustedBy';
import { Features } from '../sections/Features';
import { Workflow } from '../sections/Workflow';
import { Analytics } from '../sections/Analytics';
import { Benefits } from '../sections/Benefits';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { Pricing } from '../sections/Pricing';
import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';

export function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Workflow />
        <Analytics />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
