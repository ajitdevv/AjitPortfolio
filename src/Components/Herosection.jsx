import { MoveDown } from "lucide-react";

function Herosection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl max-sm:w-50 font-bold">
        <span className="text-primary">Hi,I'm </span>
        <span className="text-primary-foreground">Frontend </span>
        <span className="text-primary">Developer</span>
      </h1>
      <p className="text-primary w-120 gap-t-6 text-s text-center mt-4 max-sm:w-56 ">
        passionate web Developer blending code and creativity to build
        modern,responsive, and impactful digital experiences."
      </p>
      <a href="#projects">
        <button className="cosmic-button text-lg mt-10">See my work</button>
      </a>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce ">
        <span className="text-sm mb-1 text-primary">Scroll</span>
        <MoveDown className="h-4 w-6 text-accent transition-transform duration-700 ease-in-out" />
      </div>
    </section>
  );
}
export default Herosection;
