import { useEffect, useState } from "react";

export default function GradientCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="gradient-cursor"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}