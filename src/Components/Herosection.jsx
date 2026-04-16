import { MoveDown } from "lucide-react";
import { useTypewriter, useScrollReveal } from "../hooks/useAnimations";

function HeroSection() {
  const typedText = useTypewriter(
    ["Frontend Developer", "UI/UX Enthusiast", "React Developer", "Web Creator"],
    90,
    50,
    2000
  );

  const [subtitleRef, subtitleVisible] = useScrollReveal();
  const [btnRef, btnVisible] = useScrollReveal();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-primary-foreground/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-60 h-60 md:w-[400px] md:h-[400px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl text-center">
        {/* Badge */}
        <div className="glass-subtle rounded-full px-4 py-1.5 mb-6">
          <span className="text-primary/60 text-xs md:text-sm font-medium tracking-wide">
            Available for freelance work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
          Hi, I'm a
        </h1>
        <div className="h-14 md:h-20 flex items-center mt-1">
          <span className="text-primary-foreground text-3xl md:text-5xl lg:text-6xl font-bold">
            {typedText}
          </span>
          <span className="text-accent text-3xl md:text-5xl lg:text-6xl font-bold animate-blink ml-0.5">|</span>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={`text-primary/50 max-w-md text-sm md:text-base mt-6 leading-relaxed transition-all duration-700 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I build responsive, user-friendly frontend interfaces with modern web
          technologies, focused on clean and efficient code.
        </p>

        {/* CTA buttons */}
        <div
          ref={btnRef}
          className={`flex flex-col sm:flex-row items-center gap-3 mt-8 transition-all duration-700 delay-150 ${
            btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a href="#projects" className="btn-primary px-8 py-3 text-base">
            <span className="flex items-center gap-2">
              View Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </a>
          <a href="#contact" className="btn-outline px-8 py-3 text-base">
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-primary/30 text-xs mb-1">Scroll</span>
        <MoveDown className="h-4 w-4 text-primary/30" />
      </div>
    </section>
  );
}

export default HeroSection;
