import { reviews } from "@/entities/home-content";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./ReviewsSection.module.css";

export function ReviewsSection() {
  return (
    <section className={styles.section} data-reveal>
      <Container className={styles.grid}>
        <div>
          <SectionLabel>Отзывы</SectionLabel>
          <SectionTitle>Пары часто пишут не про фото, а про день, который вернулся.</SectionTitle>
        </div>
        <div>
          {reviews.map((review) => (
            <blockquote className={styles.quote} key={review.author}>
              <p>{review.text}</p>
              <small>{review.author}</small>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
