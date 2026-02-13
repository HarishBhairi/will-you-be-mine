import { useEffect, useState } from "react";

const COLORS = [
  "hsl(340, 82%, 52%)",
  "hsl(45, 93%, 58%)",
  "hsl(330, 60%, 70%)",
  "hsl(0, 0%, 100%)",
  "hsl(340, 60%, 80%)",
  "hsl(280, 60%, 65%)",
];

interface Piece {
  id: number;
  left: number;
  color: string;
  duration: number;
  delay: number;
  size: number;
  shape: "square" | "circle";
}

const Confetti = () => {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const generated: Piece[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 1.5,
      size: 6 + Math.random() * 10,
      shape: Math.random() > 0.5 ? "square" : "circle",
    }));
    setPieces(generated);
  }, []);

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default Confetti;
