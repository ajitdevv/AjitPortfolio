import { useScrollProgress } from "../hooks/useAnimations";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[200] bg-transparent">
      <div
        className="h-full rounded-r-full transition-[width] duration-75"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, var(--primary-foreground), var(--accent))",
          boxShadow: "0 0 10px var(--primary-foreground), 0 0 20px var(--accent)",
        }}
      />
    </div>
  );
}

export default ScrollProgress;
