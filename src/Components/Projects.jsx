import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useRef, useCallback } from "react";
import { projects } from "../lid/utils";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useAnimations";

function ProjectCard({ project, onNavigate, index }) {
  const cardRef = useRef(null);
  const [revealRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
    const shine = el.querySelector(".card-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,255,255,0.12) 0%, transparent 55%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    const shine = el.querySelector(".card-shine");
    if (shine) shine.style.background = "transparent";
  }, []);

  return (
    <div
      ref={revealRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? `${(index % 6) * 100}ms` : "0ms" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/20 group cursor-pointer"
        style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
        onClick={() => onNavigate(project)}
      >
        {/* Shine overlay */}
        <div className="card-shine absolute inset-0 z-20 pointer-events-none rounded-2xl" />

        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Status + Level badges */}
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold bg-green-500/90 text-white backdrop-blur-md">
              {project.status}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-card/70 text-primary backdrop-blur-md border border-border/30">
              {project.level}
            </span>
          </div>

          {/* Quick action buttons - appear on hover */}
          <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-card/80 backdrop-blur-md text-primary hover:text-primary-foreground hover:bg-card transition-all duration-300 border border-border/30"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-card/80 backdrop-blur-md text-primary hover:text-primary-foreground hover:bg-card transition-all duration-300 border border-border/30"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-primary font-bold text-base md:text-lg truncate">
                {project.title}
              </h3>
              <p className="text-primary/50 text-xs md:text-sm mt-1">
                {project.category}
              </p>
            </div>
            <div className="shrink-0 p-2 rounded-full bg-card/80 border border-border/20 text-primary/40 group-hover:text-primary-foreground group-hover:border-primary-foreground/30 transition-all duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.stack?.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] md:text-xs font-medium bg-background/60 text-primary/60 border border-border/20"
              >
                {tech}
              </span>
            ))}
            {project.stack?.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[10px] md:text-xs font-medium text-primary/40">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-foreground to-accent transition-all duration-500" />
      </div>
    </div>
  );
}

function Project() {
  const navigate = useNavigate();
  const [headingRef, headingVisible] = useScrollReveal();
  const [subRef, subVisible] = useScrollReveal();

  const handleProjectDetail = (project) => {
    navigate(`/project/${project.id}`);
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1
          ref={headingRef}
          className={`text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My{" "}
          <span className="text-primary-foreground">Projects</span>
        </h1>
        <p
          ref={subRef}
          className={`text-primary/50 mt-3 text-sm md:text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
            subVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A selection of my recent work and side projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onNavigate={handleProjectDetail}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
