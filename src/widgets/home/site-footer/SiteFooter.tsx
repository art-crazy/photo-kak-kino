import Link from "next/link";
import { siteName } from "@/entities/home-content";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>{siteName}</div>
      <div>Санкт-Петербург · снимаю с любовью к пленке</div>
      <div>
        <Link href="#top">Наверх</Link>
      </div>
    </footer>
  );
}
