import { contact } from "@/entities/home-content";
import { Button } from "@/shared/ui/button";
import { PhotoFrame } from "@/shared/ui/photo-frame";
import { SectionLabel } from "@/shared/ui/section-label";
import { SectionTitle } from "@/shared/ui/section-title";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className={styles.section} data-reveal>
      <PhotoFrame
        src={contact.image.src}
        alt={contact.image.alt}
        aspect="free"
        imageClassName={styles.image}
        className={styles.background}
        sizes="100vw"
      />
      <div className={styles.box}>
        <SectionLabel>{contact.label}</SectionLabel>
        <SectionTitle>{contact.title}</SectionTitle>
        <p>{contact.text}</p>
        <Button href={contact.action.href} tone="light">
          {contact.action.label}
        </Button>
      </div>
    </section>
  );
}
