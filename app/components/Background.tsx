'use client'
import React, { useEffect, useRef, useState } from 'react';

type CursorSpark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
};

const InteractiveCodingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const parallaxTarget = useRef({ x: 0, y: 0 });
  const parallaxCurrent = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const cursorSparksRef = useRef<CursorSpark[]>([]);
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = () => {
      setShouldAnimate(!mediaQuery.matches);
    };

    handleMotionPreference();
    mediaQuery.addEventListener('change', handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rawContext = canvas.getContext('2d');
    if (!rawContext) return;
    const context: CanvasRenderingContext2D = rawContext;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();

    mousePos.current = { x: width / 2, y: height / 2 };
    cursorSparksRef.current = [];

    const codeSnippets = [
      '0', '1', '01', '10', '11', '00', '101', '010',
      '{', '}', '(', ')', '<', '>', '[', ']',
      '/', '*', '+', '-', '=', '!=', '==',
      '=>', '::', '[]', '{}', '</>','&&', '||',
      'fn', 'var', 'let', 'const',
    ];

    const colors = ['34, 211, 238', '59, 130, 246', '139, 92, 246'];

    class Particle {
      x = 0;
      y = 0;
      size = 0;
      speedX = 0;
      speedY = 0;
      text = '';
      opacity = 0;
      rotation = 0;
      rotationSpeed = 0;
      color = '';
      pulsePhase = 0;
      depth = 0;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.depth = Math.random() * 0.7 + 0.3;
        this.size = (Math.random() * 10 + 9) * (0.6 + this.depth);
        this.speedX = (Math.random() * 0.3 - 0.15) * (0.6 + this.depth);
        this.speedY = (Math.random() * 0.3 - 0.15) * (0.6 + this.depth);
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.12 + 0.04;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.012;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulsePhase = Math.random() * Math.PI * 2;

        if (initial) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        } else {
          const offset = 60;
          this.x = Math.random() > 0.5 ? -offset : width + offset;
          this.y = Math.random() * height;
        }
      }

      update(delta: number) {
        this.x += this.speedX * delta;
        this.y += this.speedY * delta;
        this.rotation += this.rotationSpeed * delta;
        this.pulsePhase += 0.025 * delta;

        const margin = 160;
        if (this.x < -margin || this.x > width + margin || this.y < -margin || this.y > height + margin) {
          this.reset();
        }
      }

      draw() {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        const depthScale = 0.6 + this.depth;
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const finalOpacity = this.opacity * pulse;

        context.shadowBlur = 14 * depthScale;
        context.shadowColor = `rgba(${this.color}, ${finalOpacity})`;
        context.fillStyle = `rgba(${this.color}, ${finalOpacity})`;
        context.font = `${this.size}px 'JetBrains Mono', 'Courier New', monospace`;
        context.fillText(this.text, 0, 0);
        context.shadowBlur = 0;
        context.restore();
      }
    }

    class ConnectionLine {
      particles: Particle[];

      constructor(particles: Particle[]) {
        this.particles = particles;
      }

      draw() {
        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const dx = this.particles[i].x - this.particles[j].x;
            const dy = this.particles[i].y - this.particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 170) {
              const opacity = 0.08 * (1 - distance / 170);

              const gradient = context.createLinearGradient(
                this.particles[i].x,
                this.particles[i].y,
                this.particles[j].x,
                this.particles[j].y
              );
              gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity})`);
              gradient.addColorStop(1, `rgba(34, 211, 238, ${opacity})`);

              context.beginPath();
              context.strokeStyle = gradient;
              context.lineWidth = 1;
              context.moveTo(this.particles[i].x, this.particles[i].y);
              context.lineTo(this.particles[j].x, this.particles[j].y);
              context.stroke();
            }
          }
        }
      }
    }

    class MatrixRain {
      x = 0;
      y = 0;
      speed = 0;
      chars = '';
      fontSize = 12;
      color = '';
      opacity = 0;
      depth = 0;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.depth = Math.random() * 0.6 + 0.2;
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -Math.random() * height * 0.4;
        this.speed = (Math.random() * 1.2 + 0.8) * (0.5 + this.depth);
        const binaryLength = Math.floor(Math.random() * 3) + 3;
        this.chars = Array(binaryLength)
          .fill(0)
          .map(() => (Math.random() > 0.5 ? '1' : '0'))
          .join('');
        this.fontSize = 12 + this.depth * 6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.08 + 0.04;
      }

      update(delta: number) {
        this.y += this.speed * delta;
        if (this.y > height + 60) {
          this.reset();
        }
      }

      draw() {
        context.save();
        context.font = `${this.fontSize}px 'JetBrains Mono', 'Courier New', monospace`;
        context.shadowBlur = 8;
        context.shadowColor = `rgba(${this.color}, ${this.opacity})`;
        context.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        context.fillText(this.chars, this.x, this.y);
        context.shadowBlur = 0;
        context.restore();
      }
    }

    const particles: Particle[] = [];
    const matrixRains: MatrixRain[] = [];
    const connectionLines = new ConnectionLine(particles);

    const buildScene = () => {
      particles.length = 0;
      matrixRains.length = 0;

      const particleCount = shouldAnimate ? 36 : 18;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      const rainCount = shouldAnimate ? 28 : 14;
      for (let i = 0; i < rainCount; i++) {
        matrixRains.push(new MatrixRain());
      }
    };

    buildScene();

    const applyParallax = (intensity: number, drawFn: () => void) => {
      context.save();
      context.translate(parallaxCurrent.current.x * intensity, parallaxCurrent.current.y * intensity);
      drawFn();
      context.restore();
    };

    const drawCursorEffects = (delta: number) => {
      const sparks = cursorSparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx * delta * 1.5;
        spark.y += spark.vy * delta * 1.5;
        spark.vx *= 0.92;
        spark.vy *= 0.92;
        spark.life -= 0.045 * delta;

        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        const opacity = Math.min(1, spark.life);

        context.beginPath();
        context.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.35})`;
        context.lineWidth = 1.2;
        context.moveTo(spark.x, spark.y);
        context.lineTo(spark.x - spark.vx * 4, spark.y - spark.vy * 4);
        context.stroke();

        context.beginPath();
        context.fillStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
        context.arc(spark.x, spark.y, Math.max(spark.size * 0.12, 0.6), 0, Math.PI * 2);
        context.fill();
      }
    };

    const drawStaticScene = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      context.clearRect(0, 0, width, height);
      context.fillStyle = '#000';
      context.fillRect(0, 0, width, height);

      parallaxCurrent.current.x = parallaxTarget.current.x;
      parallaxCurrent.current.y = parallaxTarget.current.y;

      applyParallax(0.15, () => matrixRains.forEach((rain) => rain.draw()));
      applyParallax(0.4, () => connectionLines.draw());
      applyParallax(0.55, () => particles.forEach((particle) => particle.draw()));
    };

    let lastTimestamp = performance.now();

    const render = (timestamp: number) => {
      const delta = Math.min((timestamp - lastTimestamp) / 16.666, 4);
      lastTimestamp = timestamp;

      const easing = Math.min(0.08 * delta, 0.5);
      parallaxCurrent.current.x += (parallaxTarget.current.x - parallaxCurrent.current.x) * easing;
      parallaxCurrent.current.y += (parallaxTarget.current.y - parallaxCurrent.current.y) * easing;

      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.fillRect(0, 0, width, height);

      applyParallax(0.15, () => {
        matrixRains.forEach((rain) => {
          rain.update(delta);
          rain.draw();
        });
      });
      applyParallax(0.45, () => connectionLines.draw());
      applyParallax(0.6, () => {
        particles.forEach((particle) => {
          particle.update(delta);
          particle.draw();
        });
      });
      applyParallax(0.8, () => drawCursorEffects(delta));

      animationFrameRef.current = requestAnimationFrame(render);
    };

    const startAnimation = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      context.fillStyle = '#000';
      context.fillRect(0, 0, width, height);
      lastTimestamp = performance.now();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    if (shouldAnimate) {
      startAnimation();
    } else {
      drawStaticScene();
    }

    const handleMouseMove = (event: MouseEvent) => {
      const newPos = { x: event.clientX, y: event.clientY };
      mousePos.current = newPos;

      parallaxTarget.current.x = (event.clientX / width - 0.5) * 48;
      parallaxTarget.current.y = (event.clientY / height - 0.5) * 32;
      if (shouldAnimate) {
        const movementX = 'movementX' in event ? event.movementX : 0;
        const movementY = 'movementY' in event ? event.movementY : 0;
        const motionMagnitude = Math.min(12, Math.hypot(movementX, movementY));
        const sparks = cursorSparksRef.current;
        const sparkBurst = Math.min(6, 2 + Math.floor(motionMagnitude * 0.5));
        for (let i = 0; i < sparkBurst; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = (Math.random() * 0.9 + 0.2) * (1 + motionMagnitude * 0.05);
          sparks.push({
            x: newPos.x + Math.cos(angle) * 6,
            y: newPos.y + Math.sin(angle) * 6,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            size: Math.random() * 6 + 4,
          });
        }
        if (sparks.length > 140) {
          sparks.splice(0, sparks.length - 140);
        }
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!shouldAnimate) return;

      mousePos.current = { x: event.clientX, y: event.clientY };

      const sparks = cursorSparksRef.current;
      const burst = 12;
      for (let i = 0; i < burst; i++) {
        const angle = (Math.PI * 2 * i) / burst;
        const speed = 1.2 + Math.random() * 0.6;
        sparks.push({
          x: event.clientX + Math.cos(angle) * 4,
          y: event.clientY + Math.sin(angle) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: Math.random() * 8 + 4,
        });
      }
    };

    const handleResize = () => {
      setCanvasSize();
      buildScene();
      if (shouldAnimate) {
        startAnimation();
      } else {
        drawStaticScene();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [mounted, shouldAnimate]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black -z-10">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-cyan-500/16 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: '10%',
            animationDuration: '15s',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[28rem] h-[28rem] bg-purple-500/14 rounded-full blur-3xl animate-float"
          style={{
            top: '55%',
            right: '12%',
            animationDuration: '20s',
            animationDelay: '5s',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute w-80 h-80 bg-blue-500/14 rounded-full blur-3xl animate-float"
          style={{
            bottom: '12%',
            left: '50%',
            animationDuration: '18s',
            animationDelay: '2s',
          }}
          aria-hidden="true"
        />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
        role="presentation"
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.32)_100%)]" />
      </div>
    </div>
  );
};

export default InteractiveCodingBackground;
