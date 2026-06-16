import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import styles from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cx(styles.container, className)} {...props}>
      {children}
    </div>
  );
}
