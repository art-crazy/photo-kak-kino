import { faq } from "@/entities/home-content";
import { createHomeStructuredData } from "@/shared/config/structuredData";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { ContactSection } from "@/widgets/home/contact-section";
import { FaqSection } from "@/widgets/home/faq-section";
import { HeroSection } from "@/widgets/home/hero-section";
import { IntroSection } from "@/widgets/home/intro-section";
import { SiteFooter } from "@/widgets/home/site-footer";
import { SiteHeader } from "@/widgets/site-header";

export function HomePage() {
  const homeStructuredData = createHomeStructuredData({
    faqItems: faq.items,
  });

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
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
