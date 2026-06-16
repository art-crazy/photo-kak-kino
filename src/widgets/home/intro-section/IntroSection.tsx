import { intro } from "@/entities/home-content";
import { Container } from "@/shared/ui/container";
import { PhotoFrame } from "@/shared/ui/photo-frame";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./IntroSection.module.css";

export function IntroSection() {
  return (
    <section id="story" className={styles.section} data-reveal>
      <Container className={styles.grid}>
        <PhotoFrame
          src={intro.image.src}
          alt={intro.image.alt}
          aspect="tall"
          stamp="СПБ · КАМЕРА"
        />
        <div className={styles.copy}>
          <SectionLabel>{intro.label}</SectionLabel>
          <SectionTitle className={styles.title}>{intro.title}</SectionTitle>
          <p>{intro.text}</p>
          <p className={styles.script}>{intro.note}</p>
        </div>
      </Container>
    </section>
  );
}
