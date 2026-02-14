import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";

import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";

const BALLOONS = [
  { color: "hsl(0, 80%, 55%)", image: image1, tagline: "Every moment with you is magic ✨" },
  { color: "hsl(330, 70%, 60%)", image: image2, tagline: "Beach days & forever smiles 🌊" },
  { color: "hsl(45, 90%, 55%)", image: image3, tagline: "You + Me = Perfect 💕" },
  { color: "hsl(280, 60%, 55%)", image: image4, tagline: "Adventures with my favorite person 🌍" },
  { color: "hsl(15, 80%, 60%)", image: image5, tagline: "My happy place is next to you 🏡" },
  { color: "hsl(340, 80%, 50%)", image: image6, tagline: "Together is my favorite place to be 💖" },
];

const PYRAMID_ROWS = [[0], [1, 2], [3, 4, 5]];

const BalloonCelebration = () => {
  const [popped, setPopped] = useState<boolean[]>(Array(6).fill(false));
  const [showLetter, setShowLetter] = useState(false);

  const poppedCount = popped.filter(Boolean).length;

  const popBalloon = (index: number) => {
    if (popped[index]) return;
    const next = [...popped];
    next[index] = true;
    setPopped(next);
    if (next.every(Boolean)) {
      setTimeout(() => setShowLetter(true), 800);
    }
  };

  if (showLetter) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(340 80% 55%), hsl(330 70% 65%), hsl(350 90% 70%))" }}
      >
        <Confetti />
        <FloatingHearts count={25} />
        <div className="relative z-10 w-full max-w-2xl mx-4 animate-[letter-fade-in_1s_ease-out]">
          <div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{
              boxShadow: "0 25px 60px -15px hsl(340 80% 40% / 0.4), 0 0 0 2px hsl(340 80% 70% / 0.3)",
            }}
          >
            <div className="text-center mb-6">
              <span className="text-5xl heartbeat">💌</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-6"
              style={{ fontFamily: "'Dancing Script', cursive", color: "hsl(340, 82%, 45%)" }}
            >
              My Dearest Varun,
            </h2>
            <div
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ fontFamily: "'Quicksand', sans-serif", color: "hsl(340, 30%, 25%)" }}
            >
              <p>
                From the very first moment, you turned my ordinary days into something
                extraordinary. Every laugh we share, every quiet moment together — they're all
                my favorite memories. 💕
              </p>
              <p>
                You make me believe in magic, in forever, in all those beautiful things I thought
                only existed in stories. With you, life feels like a dream I never want to wake up from.
              </p>
              <p>
                Thank you for being my person — my best friend, my biggest supporter, and the one
                who makes my heart skip a beat every single day. 🩷
              </p>
              <p className="text-center font-bold text-xl mt-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Happy Valentine's Day, my love! 💖
              </p>
              <p className="text-center text-sm mt-4" style={{ color: "hsl(340, 40%, 55%)" }}>
                Forever & Always yours ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(340 80% 55%), hsl(330 70% 65%), hsl(350 90% 70%))" }}
    >
      <Confetti />
      <FloatingHearts count={20} />

      <div className="relative z-10 text-center px-4">
        <h2
          className="text-2xl md:text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Tap the balloons! 🎈
        </h2>
        <p className="text-white/80 mb-6 text-sm md:text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          {poppedCount}/6 balloons popped!
        </p>

        {/* Pyramid layout */}
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {PYRAMID_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-3 md:gap-5 justify-center">
              {row.map((i) => (
                <div key={i} className="relative">
                  {!popped[i] ? (
                    <button
                      onClick={() => popBalloon(i)}
                      className={`balloon-btn ${popped[i] ? "balloon-pop" : ""}`}
                      aria-label={`Pop balloon ${i + 1}`}
                    >
                      {/* Balloon shape */}
                      <div
                        className="w-20 h-24 md:w-24 md:h-28 rounded-full relative transition-transform hover:scale-110 cursor-pointer"
                        style={{
                          background: `radial-gradient(circle at 35% 30%, hsl(0 0% 100% / 0.4), ${BALLOONS[i].color} 60%)`,
                          boxShadow: `0 8px 25px ${BALLOONS[i].color.replace(")", " / 0.4)")}`,
                        }}
                      >
                        {/* Balloon knot */}
                        <div
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                          style={{ background: BALLOONS[i].color }}
                        />
                        {/* String */}
                        <div
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8"
                          style={{ background: "hsl(0 0% 100% / 0.5)" }}
                        />
                        {/* Shine */}
                        <div className="absolute top-3 left-4 w-3 h-4 bg-white/40 rounded-full rotate-[-30deg]" />
                      </div>
                    </button>
                  ) : (
                    <div className="polaroid-reveal">
                      <div
                        className="bg-white rounded-lg p-2 shadow-xl"
                        style={{
                          transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + i)}deg)`,
                          boxShadow: "0 10px 30px hsl(0 0% 0% / 0.2)",
                        }}
                      >
                        <img
                          src={BALLOONS[i].image}
                          alt={BALLOONS[i].tagline}
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded"
                        />
                        <p
                          className="text-xs md:text-sm mt-1 text-center max-w-[5rem] md:max-w-[6rem] leading-tight"
                          style={{
                            fontFamily: "'Dancing Script', cursive",
                            color: "hsl(340, 40%, 35%)",
                          }}
                        >
                          {BALLOONS[i].tagline}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalloonCelebration;
