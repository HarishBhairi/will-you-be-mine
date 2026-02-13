import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";

const TEASE_MESSAGES = [
  "Are you sure? 🥺",
  "Think again... 💔",
  "You're breaking my heart!",
  "That's not the right answer! 😤",
  "Try again, cutie 😏",
  "Nope, not an option! 🚫",
  "My heart can't take this! 💔",
  "Really?? Look at that Yes button 👉",
  "I won't give up on you! 🥹",
  "You know you want to say Yes! 💕",
];

const Index = () => {
  const [phase, setPhase] = useState<"landing" | "question" | "celebration">("landing");
  const [noAttempts, setNoAttempts] = useState(0);
  const [teaseMsg, setTeaseMsg] = useState("");
  const [noPos, setNoPos] = useState<{ top?: string; left?: string } | null>(null);

  const moveNoButton = useCallback(() => {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;
    setNoPos({ top: `${top}%`, left: `${left}%` });
    setTeaseMsg(TEASE_MESSAGES[noAttempts % TEASE_MESSAGES.length]);
    setNoAttempts((p) => p + 1);
  }, [noAttempts]);

  const yesScale = Math.min(1 + noAttempts * 0.12, 2.2);
  const noScale = Math.max(1 - noAttempts * 0.06, 0.4);

  if (phase === "celebration") {
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(340 80% 55%), hsl(330 70% 65%), hsl(350 90% 70%))" }}>
        <Confetti />
        <FloatingHearts count={30} />
        <div className="relative z-10 text-center px-6 animate-[scale-in_0.6s_ease-out]">
          <div className="text-8xl mb-6 heartbeat">💖</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}>
            Yay! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}>
            You just made me the happiest person in the world! 💕🥰
          </p>
          <p className="mt-6 text-lg text-white/70">Happy Valentine's Day, my love ❤️</p>
        </div>
      </div>
    );
  }

  if (phase === "landing") {
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(340 100% 97%), hsl(330 60% 90%), hsl(340 80% 85%))" }}>
        <FloatingHearts count={15} />
        <div className="relative z-10 text-center px-6">
          <div className="text-7xl mb-8 heartbeat">💌</div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}>
            Hey, I have something to ask you...
          </h1>
          <p className="text-lg text-muted-foreground mb-10" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            It's really important 🩷
          </p>
          <button
            onClick={() => setPhase("question")}
            className="px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground bg-primary hover:brightness-110 transition-all pulse-glow"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Open it 💝
          </button>
        </div>
      </div>
    );
  }

  // Question phase
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(340 100% 97%), hsl(330 60% 90%), hsl(340 80% 85%))" }}>
      <FloatingHearts count={12} />
      <div className="relative z-10 text-center px-6">
        <div className="text-6xl mb-6 heartbeat">💕</div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}>
          Will you be my Valentine?
        </h1>

        {teaseMsg && (
          <p className="text-lg text-primary font-semibold mt-2 mb-6 animate-[fade-in_0.3s_ease-out]"
            style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {teaseMsg}
          </p>
        )}
        {!teaseMsg && <div className="h-10" />}

        <div className="flex gap-6 justify-center items-center mt-4">
          <button
            onClick={() => setPhase("celebration")}
            className="rounded-full font-bold text-primary-foreground bg-primary hover:brightness-110 transition-all duration-300 pulse-glow"
            style={{
              fontFamily: "'Quicksand', sans-serif",
              transform: `scale(${yesScale})`,
              padding: "16px 36px",
              fontSize: "1.2rem",
            }}
          >
            Yes! 💖
          </button>
        </div>
      </div>

      {/* No button — absolute positioned when it escapes */}
      <button
        onMouseEnter={moveNoButton}
        onClick={moveNoButton}
        onTouchStart={moveNoButton}
        className="rounded-full font-semibold border-2 border-primary/30 text-muted-foreground bg-secondary hover:bg-secondary transition-all duration-200 z-20"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          transform: `scale(${noScale})`,
          padding: "12px 28px",
          fontSize: "1rem",
          position: noPos ? "fixed" : "relative",
          top: noPos?.top ?? undefined,
          left: noPos?.left ?? undefined,
          marginTop: noPos ? undefined : "24px",
        }}
      >
        No 😢
      </button>
    </div>
  );
};

export default Index;
