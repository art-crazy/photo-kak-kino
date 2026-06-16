import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import styles from "./SectionLabel.module.css";

type SectionLabelProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <span className={cx(styles.label, className)} {...props}>
      {children}
    </span>
  );
}
