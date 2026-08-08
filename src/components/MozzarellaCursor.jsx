import { useEffect, useRef } from 'react';
import './MozzarellaCursor.css';

export default function MozzarellaCursor() {
  const pathsRef = useRef([]);
  const pizzaRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  
  const NUM_POINTS = 45;
  const points = useRef(Array(NUM_POINTS).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    
    const animate = () => {
      let px = mouse.current.x;
      let py = mouse.current.y - 35; // Offset everything 35px above the actual mouse pointer

      // Update pizza slice position instantly
      if (pizzaRef.current) {
        // By adding a local translate after the rotate, we shift it so the visual tip hits the new origin
        pizzaRef.current.style.transform = `translate(${px}px, ${py}px) rotate(-90deg) translate(-8px, -12px)`;
      }

      points.current = points.current.map((p) => {
        const dx = px - p.x;
        const dy = py - p.y;
        
        // Lag factor: smaller number = longer string
        const newX = p.x + dx * 0.25;
        const newY = p.y + dy * 0.25;
        
        px = newX;
        py = newY;
        
        return { x: newX, y: newY };
      });

      // Update the SVG path segments
      for (let i = 0; i < NUM_POINTS - 1; i++) {
        const path = pathsRef.current[i];
        if (path) {
          const p1 = points.current[i];
          const p2 = points.current[i + 1];
          // Draw a line segment between each consecutive point
          path.setAttribute('d', `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="mozzarella-container">
      <svg className="mozzarella-svg">
        <defs>
          <filter id="goo-line">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        
        <g filter="url(#goo-line)">
          {Array.from({ length: NUM_POINTS - 1 }).map((_, i) => {
            // Taper the stroke width from 6px down to 0.5px (even finer)
            const strokeWidth = Math.max(0.5, 6 - (i * (6 / NUM_POINTS)));
            // Fade out the tail to not distract from content
            const opacity = Math.max(0.05, 1 - (i * (1 / NUM_POINTS)));
            
            return (
              <path
                key={i}
                ref={el => pathsRef.current[i] = el}
                fill="none"
                stroke="#fffae6" /* Mozzarella color */
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={opacity}
              />
            );
          })}
        </g>
      </svg>
      
      {/* Pizza Slice Cursor */}
      <img 
        src="/foto/pizza-slice-01-svgrepo-com.svg" 
        alt="Pizza Cursor" 
        className="pizza-cursor-img" 
        ref={pizzaRef}
      />
    </div>
  );
}
