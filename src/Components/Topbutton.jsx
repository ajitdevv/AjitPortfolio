import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../hooks/useAnimations";

function Topbutton() {
  const [visible, setVisible] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    setVisible(window.scrollY > 300);
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circle progress ring
  const size = 48;
  const stroke = 2.5;
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 transition-all duration-500 group ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-[0_0_20px_var(--primary-foreground)] hover:border-primary-foreground/40 transition-all duration-300 hover:scale-110 active:scale-95">
        {/* Progress ring */}
        <svg
          width={size}
          height={size}
          className="absolute inset-0 -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--primary-foreground)"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150"
          />
        </svg>

        {/* Arrow icon */}
        <ArrowUp
          size={18}
          className="text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:-translate-y-0.5"
        />
      </div>
    </button>
  );
}

export default Topbutton;
