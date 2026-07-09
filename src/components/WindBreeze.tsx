import { useEffect, useRef } from 'react';

interface BreezeLine {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  fadeStage: 'in' | 'stable' | 'out';
  maxOpacity: number;
}

export default function WindBreeze() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Limit devicePixelRatio to 1.5 to prevent GPU bottleneck on high-res mobile devices
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const lines: BreezeLine[] = [];
    const maxLines = 8; // Low count for high performance

    function createLine(initialX = -200): BreezeLine {
      return {
        x: initialX,
        y: Math.random() * height,
        length: 100 + Math.random() * 150,
        speed: 0.5 + Math.random() * 1.2,
        opacity: 0,
        maxOpacity: 0.08 + Math.random() * 0.1, // More visible yet elegant
        fadeStage: 'in',
      };
    }

    // Distribute initial lines across the screen width so they don't all start from the left at the same time
    for (let i = 0; i < maxLines; i++) {
      lines.push(createLine(Math.random() * width));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    let lastTime = performance.now();
    const fpsInterval = 1000 / 60; // Cap at 60 FPS

    const draw = (now: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = now - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = now - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Move line horizontally
        line.x += line.speed;

        // Manage fading states
        if (line.fadeStage === 'in') {
          line.opacity += 0.005;
          if (line.opacity >= line.maxOpacity) {
            line.opacity = line.maxOpacity;
            line.fadeStage = 'stable';
          }
        }

        // Fade out as it approaches the right side of the screen
        if (line.x + line.length > width - 150) {
          line.fadeStage = 'out';
        }

        if (line.fadeStage === 'out') {
          line.opacity -= 0.005;
          if (line.opacity <= 0) {
            line.opacity = 0;
          }
        }

        // Draw line with horizontal gradient
        if (line.opacity > 0) {
          const gradient = ctx.createLinearGradient(
            line.x,
            line.y,
            line.x + line.length,
            line.y
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
          gradient.addColorStop(0.3, `rgba(255, 255, 255, ${line.opacity})`);
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${line.opacity})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
          ctx.stroke();
        }

        // Recycle if completely off screen
        if (line.x > width) {
          lines[i] = createLine();
        }
      }
    };

    // Pause animation when tab is inactive to preserve battery on mobile
    let isRunning = true;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(draw);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'plus-lighter' }}
    />
  );
}
