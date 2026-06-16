import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import styles from "./Button.module.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "wine" | "light";
};

export function Button({ children, className, tone = "wine", ...props }: ButtonProps) {
  return (
    <a className={cx(styles.button, styles[tone], className)} {...props}>
      {children}
    </a>
  );
}
