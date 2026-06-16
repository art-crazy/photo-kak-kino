import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2 className={cx(styles.title, className)} {...props}>
      {children}
    </h2>
  );
}
