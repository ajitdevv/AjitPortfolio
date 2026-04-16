import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isdarkmode, setisdarkmode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setisdarkmode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setisdarkmode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isdarkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setisdarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setisdarkmode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed z-[200] p-2 rounded-full glass transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-110 hover:shadow-[0_0_15px_var(--primary-foreground)] ${
        scrolled
          ? "top-2 right-28 md:top-2.5 md:right-36"
          : "top-5 right-6 md:top-6 md:right-20"
      }`}
      aria-label="Toggle theme"
    >
      <span className={`block transition-all duration-500 ${isdarkmode ? "rotate-180" : "rotate-0"}`}>
        {isdarkmode ? (
          <Sun className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-primary-foreground" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
