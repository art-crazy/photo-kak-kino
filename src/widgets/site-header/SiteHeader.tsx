"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteName } from "@/entities/home-content";
import { cx } from "@/shared/lib/cx";
import { BurgerButton } from "@/shared/ui/burger-button";
import { Logo } from "@/shared/ui/logo";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const nextIsScrolled = window.scrollY > 24;

      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled,
      );
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={cx(styles.nav, isScrolled && styles.scrolled)}>
      <Logo>{siteName}</Logo>
      <BurgerButton
        isOpen={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setIsOpen((value) => !value)}
      />
      <nav className={cx(styles.links, isOpen && styles.open)} aria-label="Главная навигация">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
