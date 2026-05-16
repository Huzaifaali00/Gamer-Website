'use client';
import { useEffect, useRef } from 'react';
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];

    // ✅ Capture as non-nullable so the class constructor can use it safely
    const canvasEl = canvas as HTMLCanvasElement;

    const resizeCanvas = () => {
      if (canvasEl.parentElement) {
        canvasEl.width = canvasEl.parentElement.clientWidth;
        canvasEl.height = canvasEl.parentElement.clientHeight;
      } else {
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
      }
    };
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = canvasEl.width;
        if (this.x > canvasEl.width) this.x = 0;
        if (this.y < 0) this.y = canvasEl.height;
        if (this.y > canvasEl.height) this.y = 0;
      }
      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.shadowBlur = 8;
        context.shadowColor = 'rgba(124,58,237,0.5)';
        context.fill();
        context.closePath();
      }
    }
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 70; i++) {
        particles.push(new Particle());
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };
    resizeCanvas();
    initParticles();
    animate();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
