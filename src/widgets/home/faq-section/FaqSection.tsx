import { faq } from "@/entities/home-content";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  return (
    <section
      id="conditions"
      className={styles.section}
      aria-labelledby="conditions-title"
      data-reveal
    >
      <Container className={styles.grid}>
        <div className={styles.heading}>
          <SectionLabel>{faq.label}</SectionLabel>
          <SectionTitle id="conditions-title">{faq.title}</SectionTitle>
        </div>
        <div className={styles.list}>
          {faq.items.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
