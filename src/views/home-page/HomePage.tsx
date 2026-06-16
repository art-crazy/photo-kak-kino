import { homeStructuredData } from "@/shared/config/structuredData";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { ContactSection } from "@/widgets/home/contact-section";
import { HeroSection } from "@/widgets/home/hero-section";
import { IntroSection } from "@/widgets/home/intro-section";
import { SiteFooter } from "@/widgets/home/site-footer";
import { SiteHeader } from "@/widgets/site-header";

export function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <RevealOnScroll />
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <IntroSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
