import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/shared/lib/cx";
import styles from "./BurgerButton.module.css";

type BurgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
};

export function BurgerButton({ isOpen, className, ...props }: BurgerButtonProps) {
  return (
    <button
      className={cx(styles.button, isOpen && styles.open, className)}
      type="button"
      aria-expanded={isOpen}
      {...props}
    >
      <span />
      <span />
    </button>
  );
}
