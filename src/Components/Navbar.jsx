import logo from "../assets/image/reminihi.png";
import logo2 from "../assets/image/remini2.png";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const navitems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(checkTheme);
    obs.observe(document.documentElement, { attributes: true });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navitems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
        scrolled
          ? "top-0 w-full"
          : "top-3 md:top-4 w-[94%] md:w-[80%] lg:w-[70%]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3 transition-all duration-700 ${
          scrolled
            ? "glass-strong shadow-lg rounded-none"
            : "glass rounded-2xl"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            className="w-7 h-8 md:w-8 md:h-9"
            src={isDark ? logo : logo2}
            alt="logo"
          />
          <span
            className={`text-primary font-semibold text-sm transition-all duration-500 overflow-hidden whitespace-nowrap ${
              scrolled ? "opacity-100 max-w-20" : "opacity-0 max-w-0"
            }`}
          >
            Ajeet<span className="text-primary-foreground">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navitems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg text-sm transition-all duration-300 block ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary-foreground font-semibold"
                    : "text-primary/50 hover:text-primary font-medium"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-primary/50 hover:text-primary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="hidden md:block btn-nav"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-400 ${
          isMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `rgba(var(--glass-rgb), 0.88)`,
            backdropFilter: "blur(30px) saturate(1.8)",
            WebkitBackdropFilter: "blur(30px) saturate(1.8)",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-3 px-8">
          {navitems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full max-w-xs transition-all duration-400 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <div
                className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "glass-strong text-primary"
                    : "glass-subtle text-primary/70"
                }`}
                style={
                  activeSection === item.href.replace("#", "")
                    ? { boxShadow: "0 0 15px var(--primary-foreground)" }
                    : {}
                }
              >
                <span className="text-lg font-medium">{item.name}</span>
                <span className="text-xs text-primary/25 font-mono">0{i + 1}</span>
              </div>
            </a>
          ))}
          <div
            className={`mt-4 w-full max-w-xs transition-all duration-400 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isMenuOpen ? `${navitems.length * 60 + 80}ms` : "0ms" }}
          >
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center btn-primary py-3 text-base"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
