import Link from "next/link";
import {
  getServicePagePath,
  type ServicePageContent,
} from "@/entities/service-content";
import { createServiceStructuredData } from "@/shared/config/structuredData";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { CursorAura } from "@/shared/ui/cursor-aura";
import { PhotoFrame } from "@/shared/ui/photo-frame";
import { RevealOnScroll } from "@/shared/ui/reveal-on-scroll";
import { SectionLabel } from "@/shared/ui/section-label";
import { SiteFooter } from "@/widgets/home/site-footer";
import { SiteHeader } from "@/widgets/site-header";
import styles from "./ServicePage.module.css";

type ServicePageProps = {
  page: ServicePageContent;
};

export function ServicePage({ page }: ServicePageProps) {
  const structuredData = createServiceStructuredData({
    city: page.city,
    description: page.description,
    faqItems: page.faq,
    path: getServicePagePath(page),
    price: page.price,
    serviceType: page.serviceType,
    title: page.title,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <CursorAura />
      <RevealOnScroll />
      <SiteHeader />
      <main id="top">
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroText} data-reveal>
              <Link className={styles.backLink} href="/">
                Главная
              </Link>
              <SectionLabel>{page.label}</SectionLabel>
              <h1>{page.title}</h1>
              <p>{page.lead}</p>
              <div className={styles.meta}>
                <span>{page.city}</span>
                <span>{page.price}</span>
              </div>
              <Button href="mailto:hello@photo-kak-kino.ru">Обсудить съемку</Button>
            </div>
            <PhotoFrame
              src={page.image.src}
              alt={page.image.alt}
              aspect="free"
              className={styles.heroImage}
              imageClassName={styles.image}
              sizes="(max-width: 900px) 100vw, 48vw"
              priority
            />
          </Container>
        </section>

        <section className={styles.content}>
          <Container className={styles.contentGrid}>
            {page.sections.map((section) => (
              <article key={section.title} className={styles.textBlock} data-reveal>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </article>
            ))}
          </Container>
        </section>

        <section className={styles.keywords} aria-label="Направления съемки">
          <Container>
            <ul>
              {page.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </Container>
        </section>

        <section className={styles.faq} data-reveal>
          <Container>
            <SectionLabel>Вопросы</SectionLabel>
            <h2>Что важно знать перед съемкой</h2>
            <div className={styles.faqList}>
              {page.faq.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
