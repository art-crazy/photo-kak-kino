import { approachItems } from "@/entities/home-content";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./ApproachSection.module.css";

export function ApproachSection() {
  return (
    <section id="approach" className={styles.section} data-reveal>
      <Container className={styles.grid}>
        <div>
          <SectionLabel>Подход</SectionLabel>
          <SectionTitle>Тихая режиссура вместо свадебной суеты.</SectionTitle>
        </div>
        <div className={styles.lines}>
          {approachItems.map((item) => (
            <div className={styles.line} key={item.title}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
