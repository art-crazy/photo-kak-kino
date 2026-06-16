import Image, { type StaticImageData } from "next/image";
import { cx } from "@/shared/lib/cx";
import styles from "./PhotoFrame.module.css";

type PhotoFrameProps = {
  src: string | StaticImageData;
  alt: string;
  aspect?: "tall" | "wide" | "portrait" | "square" | "free";
  stamp?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoFrame({
  src,
  alt,
  aspect = "wide",
  stamp,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: PhotoFrameProps) {
  return (
    <div className={cx(styles.frame, styles[aspect], className)}>
      <Image
        className={cx(styles.image, imageClassName)}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
      />
      {stamp ? <span className={styles.stamp}>{stamp}</span> : null}
    </div>
  );
}
