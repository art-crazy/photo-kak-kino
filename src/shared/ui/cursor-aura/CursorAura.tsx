"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorAura.module.css";

type CursorState = {
  active: boolean;
  x: number;
  y: number;
};

const colors = ["114, 47, 55", "43, 42, 40", "184, 128, 110", "247, 243, 236"];
const maxParticles = 170;

class CursorShard {
  private readonly color = colors[Math.floor(Math.random() * colors.length)];
  private readonly maxLife = Math.random() * 26 + 28;
  private readonly sides = Math.random() > 0.45 ? 4 : 3;
  private readonly spin = (Math.random() - 0.5) * 0.22;
  private life = 0;
  private rotation = Math.random() * Math.PI * 2;
  private size = Math.random() * 5 + 3;
  private vx: number;
  private vy: number;
  private x: number;
  private y: number;

  constructor(x: number, y: number, dx: number, dy: number) {
    const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.7;
    const speed = Math.random() * 2.1 + 1.1;

    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed + (Math.random() - 0.5) * 0.8;
  }

  get isDead() {
    return this.life >= this.maxLife;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const progress = this.life / this.maxLife;
    const opacity = Math.max(0, 1 - progress);

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = opacity * 0.78;
    ctx.fillStyle = `rgb(${this.color})`;

    if (this.sides === 4) {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.lineTo(this.size * 0.9, this.size * 0.7);
      ctx.lineTo(-this.size * 0.9, this.size * 0.7);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.95;
    this.vy *= 0.95;
    this.vy += 0.018;
    this.rotation += this.spin;
    this.size *= 0.992;
    this.life += 1;
  }
}

export function CursorAura() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<CursorState>({
    active: false,
    x: 0,
    y: 0,
  });
  const frameRef = useRef(0);
  const particlesRef = useRef<CursorShard[]>([]);

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
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const move = (event: MouseEvent) => {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const distance = Math.hypot(dx, dy);

      cursorRef.current = {
        active: true,
        x: event.clientX,
        y: event.clientY,
      };

      if (distance > 2) {
        const count = Math.min(9, Math.floor(distance / 4) + 2);

        for (let index = 0; index < count; index += 1) {
          particlesRef.current.push(
            new CursorShard(event.clientX, event.clientY, dx, dy),
          );
        }
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
      cursorRef.current.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (cursorRef.current.active) {
        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.fillStyle = "rgb(114, 47, 55)";
        ctx.beginPath();
        ctx.arc(cursorRef.current.x, cursorRef.current.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return !particle.isDead;
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
