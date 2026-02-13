import { useEffect, useState } from "react";

const HEART_CHARS = ["💕", "💖", "💗", "💓", "❤️", "💘", "💝", "🩷"];

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  char: string;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
    }));
    setHearts(generated);
  }, [count]);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.char}
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
