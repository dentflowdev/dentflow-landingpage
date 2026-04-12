import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { TrustedBy } from './sections/TrustedBy';
import { Features } from './sections/Features';
import { Workflow } from './sections/Workflow';
import { Analytics } from './sections/Analytics';
import { Benefits } from './sections/Benefits';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Pricing } from './sections/Pricing';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base selection:bg-primary selection:text-white">
      <Navbar />
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
    </div>
  );
}

export default App;
