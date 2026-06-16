import Image from "next/image";
import { filmstripImages, hero } from "@/entities/home-content";
import { Button } from "@/shared/ui/button";
import { SectionLabel } from "@/shared/ui/section-label";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.inner}>
        <SectionLabel className={styles.meta}>{hero.label}</SectionLabel>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <Button href="#works" tone="light">
          Смотреть истории
        </Button>
        <div className={styles.filmstrip} aria-label="Контактный лист">
          {filmstripImages.map((image) => (
            <div className={styles.frame} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="130px" className={styles.thumb} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
