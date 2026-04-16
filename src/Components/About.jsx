import Developer from "../assets/image/DeveloperImage.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal, useCountUp } from "../hooks/useAnimations";

function About() {
  const [headingRef, headingVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [projectsRef, projectsCount] = useCountUp(20, 2000);
  const [experienceRef, experienceCount] = useCountUp(3, 2000);
  const [techRef, techCount] = useCountUp(15, 2000);

  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1
          ref={headingRef}
          className={`text-3xl md:text-5xl font-bold text-primary text-center mb-12 md:mb-16 transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About <span className="text-primary-foreground">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Image with gradient border */}
          <div
            className={`shrink-0 gradient-border rounded-2xl p-1 transition-all duration-700 delay-100 ${
              headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={Developer}
              className="w-56 h-56 md:w-72 md:h-72 rounded-xl object-cover"
              alt="Ajeet Bairwa"
            />
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`flex-1 text-center md:text-left transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-primary text-lg md:text-2xl font-medium leading-relaxed">
              I'm{" "}
              <a
                href="https://www.instagram.com/ajitdevv/"
                target="_blank"
                className="text-primary-foreground font-semibold hover:underline"
              >
                Ajeet Bairwa
              </a>
              , a passionate Web Developer blending code and creativity.
            </h2>
            <p className="text-primary/50 text-sm md:text-base mt-4 leading-relaxed">
              Whether you need a business website, a startup platform, a personal
              portfolio, or an e-commerce store — I specialize in designing
              impactful digital solutions through clean design, fast performance,
              and user-friendly experiences.
            </p>

            {/* Stats - glass cards */}
            <div className="flex justify-center md:justify-start gap-3 mt-8">
              <div ref={projectsRef} className="glass rounded-2xl px-4 py-3 md:px-5 md:py-4 text-center flex-1 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{projectsCount}+</span>
                <p className="text-primary/50 text-xs mt-1">Projects</p>
              </div>
              <div ref={experienceRef} className="glass rounded-2xl px-4 py-3 md:px-5 md:py-4 text-center flex-1 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{experienceCount}+</span>
                <p className="text-primary/50 text-xs mt-1">Years Exp.</p>
              </div>
              <div ref={techRef} className="glass rounded-2xl px-4 py-3 md:px-5 md:py-4 text-center flex-1 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{techCount}+</span>
                <p className="text-primary/50 text-xs mt-1">Technologies</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-3 mt-8">
              <a href="#contact" className="btn-primary">
                <span>Contact me</span>
              </a>
              <Link to="/about/cv" className="btn-outline">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
