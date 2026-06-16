import { works } from "@/entities/home-content";
import { Container } from "@/shared/ui/container";
import { PhotoFrame } from "@/shared/ui/photo-frame";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./PortfolioSection.module.css";

export function PortfolioSection() {
  return (
    <section id="works" className={styles.section} data-reveal>
      <Container>
        <div className={styles.head}>
          <div>
            <SectionLabel>Портфолио</SectionLabel>
            <SectionTitle className={styles.title}>
              Истории, в которых Петербург остается фоном для людей.
            </SectionTitle>
          </div>
          <p>
            Несколько направлений съемки: свадьбы, Love Story, портреты и спокойные прогулки без
            лишней постановки.
          </p>
        </div>
        <div className={styles.works}>
          {works.map((work) => (
            <article className={styles.work} key={work.src}>
              <PhotoFrame src={work.src} alt={work.alt} aspect={work.aspect} />
              <p className={styles.caption}>{work.caption}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
