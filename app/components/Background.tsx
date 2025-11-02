'use client'
import React, { useEffect, useRef, useState } from 'react';



const InteractiveCodingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const mouseTrail = useRef<Array<{ x: number; y: number; opacity: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Minimalist code snippets - binary and simple syntax
    const codeSnippets = [
      '0', '1', '01', '10', '11', '00',
      '{', '}', '(', ')', '<', '>',
      '/', '*', '+', '-', '=',
      '=>', '::' , '[]', '{}',
    ];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      text: string = '';
      opacity: number = 0;
      rotation: number = 0;
      rotationSpeed: number = 0;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 8; // Smaller size
        this.speedX = Math.random() * 0.3 - 0.15; // Slower movement
        this.speedY = Math.random() * 0.3 - 0.15;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.08 + 0.02; // Even lower opacity for visibility
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01; // Slower rotation
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Remove particle repel effect for cleaner interaction
        
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px 'JetBrains Mono', 'Courier New', monospace`;
        // Subtle cyan with very low opacity
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    class ConnectionLine {
      particles: Particle[];

      constructor(particles: Particle[]) {
        this.particles = particles;
      }

      draw() {
        if (!ctx) return;

        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const dx = this.particles[i].x - this.particles[j].x;
            const dy = this.particles[i].y - this.particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Extremely subtle connection lines
            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 211, 238, ${0.03 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(this.particles[i].x, this.particles[i].y);
              ctx.lineTo(this.particles[j].x, this.particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    class MatrixRain {
      x: number = 0;
      y: number = 0;
      speed: number = 0;
      chars: string = '';
      fontSize: number = 14;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -500;
        this.speed = Math.random() * 1.2 + 0.4; // Even slower fall
        // Binary rain - only 0s and 1s
        const binaryLength = Math.floor(Math.random() * 2) + 1; // Shorter sequences
        this.chars = Array(binaryLength).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('');
        this.fontSize = 11; // Even smaller font
      }

      update() {
        if (!canvas) return;
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;

        ctx.font = `${this.fontSize}px 'JetBrains Mono', 'Courier New', monospace`;
        // Extremely subtle binary rain - barely visible
        ctx.fillStyle = 'rgba(34, 211, 238, 0.04)';
        ctx.fillText(this.chars, this.x, this.y);
      }
    }

    // Minimalist - fewer particles for better text visibility
    const particles: Particle[] = [];
    const particleCount = 18; // Further reduced
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const matrixRains: MatrixRain[] = [];
    const rainCount = 12; // Further reduced from 20
    for (let i = 0; i < rainCount; i++) {
      matrixRains.push(new MatrixRain());
    }

    const connectionLines = new ConnectionLine(particles);

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      mousePos.current = newPos;
      
      // Add point to trail with full opacity
      mouseTrail.current.push({ ...newPos, opacity: 1 });
      
      // Limit trail length
      if (mouseTrail.current.length > 30) {
        mouseTrail.current.shift();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      // Minimalist fade - slower trail effect for smoother look
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Binary rain in background
      matrixRains.forEach(rain => {
        rain.update();
        rain.draw();
      });

      // Very subtle connection lines
      connectionLines.draw();

      // Floating code particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw glowing cursor trail line
      if (mouseTrail.current.length > 1) {
        // Fade out trail points
        mouseTrail.current.forEach(point => {
          point.opacity *= 0.95;
        });
        
        // Remove fully faded points
        mouseTrail.current = mouseTrail.current.filter(point => point.opacity > 0.01);
        
        // Draw the trail as a glowing line
        for (let i = 1; i < mouseTrail.current.length; i++) {
          const prev = mouseTrail.current[i - 1];
          const curr = mouseTrail.current[i];
          
          // Draw glow effect - outer glow
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${curr.opacity * 0.15})`;
          ctx.lineWidth = 8;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          // Draw middle glow
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${curr.opacity * 0.3})`;
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          // Draw core line - brightest
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${curr.opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#000000' }}
      />
      {/* Minimalist gradient overlay - subtle vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
    </div>
  );
};

export default InteractiveCodingBackground;