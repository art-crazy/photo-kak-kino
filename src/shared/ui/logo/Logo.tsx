import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  children: string;
};

export function Logo({ href = "#top", children }: LogoProps) {
  return (
    <Link className={styles.logo} href={href}>
      {children}
    </Link>
  );
}
