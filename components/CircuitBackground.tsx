import React, { useEffect, useRef } from 'react';

interface PixelCactus {
  x: number;
  y: number;
  scale: number;
  speed: number;
  opacity: number;
}

const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // --- Circuit Lines Logic ---
    const lines: { x: number; y: number; length: number; speed: number; vertical: boolean }[] = [];
    const maxLines = 25;

    const createLine = () => {
      const vertical = Math.random() > 0.5;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 200 + 50,
        speed: Math.random() * 1.5 + 0.2,
        vertical
      };
    };

    for (let i = 0; i < maxLines; i++) {
      lines.push(createLine());
    }

    // --- Pixel Cactus Logic (8-BIT STYLE) ---
    const cactuses: PixelCactus[] = [];
    const maxCactuses = 15; 

    const createCactus = (startBottom = false): PixelCactus => ({
      x: Math.random() * width,
      y: startBottom ? height + 100 : Math.random() * height,
      scale: Math.floor(Math.random() * 4) + 4, // Larger scale for visible pixels (4x to 8x)
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.3 + 0.1 
    });

    for (let i = 0; i < maxCactuses; i++) {
      cactuses.push(createCactus());
    }

    // Detailed 8-bit Cactus Matrix (1 = Pixel)
    const cactusMatrix = [
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
    ];

    const drawPixelCactusShape = (ctx: CanvasRenderingContext2D, c: PixelCactus) => {
      const pixelSize = c.scale;
      // Digital Emerald Green for visibility against dark bg
      ctx.fillStyle = `rgba(16, 185, 129, ${c.opacity})`; 
      
      cactusMatrix.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          if (col === 1) {
            ctx.fillRect(
              c.x + colIndex * pixelSize,
              c.y + rowIndex * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        });
      });
    };

    const draw = () => {
      // Clear background
      ctx.fillStyle = '#020617'; 
      ctx.fillRect(0, 0, width, height);
      
      // Draw static grid dots
      ctx.fillStyle = 'rgba(46, 184, 172, 0.05)';
      for (let x = 0; x < width; x += 40) {
        for (let y = 0; y < height; y += 40) {
            ctx.fillRect(x, y, 2, 2);
        }
      }

      // Draw 8-Bit Cactuses
      cactuses.forEach((cactus, i) => {
        drawPixelCactusShape(ctx, cactus);
        cactus.y -= cactus.speed; // Float upwards
        
        // Respawn at bottom if it goes off top
        if (cactus.y < -100) {
          cactuses[i] = createCactus(true);
        }
      });

      // Draw Circuit Lines
      lines.forEach((line, index) => {
        ctx.beginPath();
        // Teal lines for contrast
        ctx.strokeStyle = `rgba(46, 184, 172, ${Math.random() * 0.15 + 0.05})`; 
        ctx.lineWidth = 1;

        if (line.vertical) {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x, line.y + line.length);
          line.y += line.speed;
          if (line.y > height) {
            lines[index] = createLine();
            lines[index].y = -lines[index].length;
          }
        } else {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
          line.x += line.speed;
          if (line.x > width) {
            lines[index] = createLine();
            lines[index].x = -lines[index].length;
          }
        }
        ctx.stroke();
        
        // Tech node circle
        ctx.fillStyle = 'rgba(79, 209, 197, 0.2)';
        ctx.beginPath();
        if (line.vertical) {
           ctx.arc(line.x, line.y + line.length, 1.5, 0, Math.PI * 2);
        } else {
           ctx.arc(line.x + line.length, line.y, 1.5, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default CircuitBackground;