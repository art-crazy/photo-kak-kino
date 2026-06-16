import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { ApproachSection } from "@/widgets/home/approach-section";
import { ContactSection } from "@/widgets/home/contact-section";
import { HeroSection } from "@/widgets/home/hero-section";
import { IntroSection } from "@/widgets/home/intro-section";
import { PortfolioSection } from "@/widgets/home/portfolio-section";
import { ReviewsSection } from "@/widgets/home/reviews-section";
import { SiteFooter } from "@/widgets/home/site-footer";
import { SiteHeader } from "@/widgets/site-header";

export function HomePage() {
  return (
    <>
      <RevealOnScroll />
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <IntroSection />
        <PortfolioSection />
        <ApproachSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
