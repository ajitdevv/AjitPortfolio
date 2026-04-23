import { useEffect, useRef, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Build trail
      const point = { x: e.clientX, y: e.clientY, id: Date.now() };
      trailRef.current = [point, ...trailRef.current.slice(0, 5)];
      setTrail([...trailRef.current]);
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("[data-hover]")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      trailRef.current = trailRef.current.slice(0, 4);
      setTrail([...trailRef.current]);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const size = isHovering ? 60 : 40;
  const ringSize = isHovering ? 80 : 50;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Trail dots */}
      {trail.map((point, i) => (
        <div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            width: 6 - i,
            height: 6 - i,
            background: "var(--primary-foreground)",
            opacity: 0.3 - i * 0.05,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
<div
        className="absolute rounded-full"
        style={{
          left: pos.x - size / 2,
          top: pos.y - size / 2,
          width: size,
          height: size,
          background: `radial-gradient(circle, var(--primary-foreground) 0%, var(--accent) 50%, transparent 100%)`,
          opacity: 0.25,
          filter: "blur(12px)",
          transition: "width 0.3s ease, height 0.3s ease, left 0.06s linear, top 0.06s linear, opacity 0.3s ease",
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute rounded-full"
        style={{
          left: pos.x - ringSize / 2,
          top: pos.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          border: `1.5px solid var(--primary-foreground)`,
          opacity: isHovering ? 0.6 : 0.3,
          transition: "width 0.3s ease, height 0.3s ease, left 0.1s ease-out, top 0.1s ease-out, opacity 0.3s ease",
          mixBlendMode: "difference",
        }}
      />

      {/* Center dot */}
      <div
        className="absolute rounded-full"
        style={{
          left: pos.x - 3,
          top: pos.y - 3,
          width: 6,
          height: 6,
          background: "var(--primary-foreground)",
          opacity: 0.8,
          transition: "left 0.04s linear, top 0.04s linear",
        }}
      />
    </div>
  );
}

export default CursorGlow;
