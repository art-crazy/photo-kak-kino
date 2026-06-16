import Link from "next/link";
import { getServicePagePath, servicePages } from "@/entities/service-content";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";
import styles from "./ServiceLinksSection.module.css";

export function ServiceLinksSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title" data-reveal>
      <Container>
        <SectionLabel>Съемки</SectionLabel>
        <div className={styles.header}>
          <h2 id="services-title">Фотосессии и свадебная съемка</h2>
          <p>
            Отдельные страницы с условиями, локациями и форматом съемки в
            Санкт-Петербурге и Москве.
          </p>
        </div>
        <div className={styles.links}>
          {servicePages.map((page) => {
            const path = getServicePagePath(page);

            return (
              <Link key={path} href={`/${path}`}>
                <span>{page.title}</span>
                <small>{page.price}</small>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
