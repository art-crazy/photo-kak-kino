"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorAura.module.css";

const smokeColors = [
  "93, 72, 68",
  "120, 95, 88",
  "156, 132, 119",
  "230, 219, 203",
];
const maxParticles = 42;
const maxPixelRatio = 2;
const minMoveDistance = 2;

class SmokeParticle {
  private readonly color =
    smokeColors[Math.floor(Math.random() * smokeColors.length)];
  private readonly maxLife = Math.random() * 28 + 34;
  private life = 0;
  private size = Math.random() * 7 + 7;
  private vx: number;
  private vy: number;
  private x: number;
  private y: number;

  constructor(x: number, y: number, dx: number, dy: number) {
    const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.2;
    const speed = Math.random() * 0.55 + 0.25;

    this.x = x + (Math.random() - 0.5) * 14;
    this.y = y + (Math.random() - 0.5) * 14;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - Math.random() * 0.18;
  }

  get isDead() {
    return this.life >= this.maxLife;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const progress = this.life / this.maxLife;
    const opacity = Math.max(0, 1 - progress) * 0.12;
    const radius = this.size * (1 + progress * 1.35);
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      radius,
    );

    gradient.addColorStop(0, `rgba(${this.color}, ${opacity})`);
    gradient.addColorStop(0.58, `rgba(${this.color}, ${opacity * 0.52})`);
    gradient.addColorStop(1, `rgba(${this.color}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.982;
    this.vy *= 0.982;
    this.vy -= 0.006;
    this.size *= 1.004;
    this.life += 1;
  }
}

export function CursorAura() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<SmokeParticle[]>([]);

  useEffect(() => {
    const canAnimate = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canAnimate || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead;
      });

      if (particlesRef.current.length === 0) {
        frameRef.current = null;
        return;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const runAnimation = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    const move = (event: MouseEvent) => {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const distance = Math.hypot(dx, dy);

      if (distance > minMoveDistance) {
        const count = Math.min(2, Math.floor(distance / 22) + 1);

        for (let index = 0; index < count; index += 1) {
          particlesRef.current.push(
            new SmokeParticle(event.clientX, event.clientY, dx, dy),
          );
        }

        runAnimation();
      }

      if (particlesRef.current.length > maxParticles) {
        particlesRef.current.splice(
          0,
          particlesRef.current.length - maxParticles,
        );
      }

      lastX = event.clientX;
      lastY = event.clientY;
    };

    const leave = () => {
      particlesRef.current = [];
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
