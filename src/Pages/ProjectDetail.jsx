import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../lid/utils";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  AlertTriangle,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useAnimations";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const project = projects.find((e) => e.id.toString() === id.toString());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Theme detection
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true });
    return () => obs.disconnect();
  }, []);

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [infoRef, infoVisible] = useScrollReveal({ threshold: 0.1 });
  const [highlightsRef, highlightsVisible] = useScrollReveal({ threshold: 0.15 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.15 });
  const [learnRef, learnVisible] = useScrollReveal({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-primary text-4xl md:text-6xl font-bold">404</h1>
        <p className="text-primary/60 text-center">This project was not found</p>
        <button
          onClick={() => navigate("/")}
          className="cosmic-button mt-4"
        >
          Go Home
        </button>
      </div>
    );
  }

  const createdDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* ===== STICKY TOP BAR ===== */}
      <div className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h2 className="text-primary font-semibold text-sm md:text-base truncate max-w-[50%]">
            {project.title}
          </h2>
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="p-2 rounded-full bg-card/60 text-primary hover:text-primary-foreground hover:bg-card transition-all duration-300"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                className="p-2 rounded-full bg-card/60 text-primary hover:text-primary-foreground hover:bg-card transition-all duration-300"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div ref={heroRef} className="pt-16 md:pt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 pt-6 md:pt-10">
          <div
            className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

            {/* Skeleton loader */}
            {!imageLoaded && (
              <div className="w-full h-48 md:h-80 bg-card animate-pulse rounded-2xl" />
            )}
            <img
              src={project.image}
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-48 md:h-80 object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />

            {/* Status badge on image */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/90 text-white backdrop-blur-md">
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PROJECT INFO ===== */}
      <div ref={infoRef} className="max-w-5xl mx-auto px-4 md:px-8 pt-6 md:pt-10">
        <div
          className={`transition-all duration-700 ${
            infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Title + Badges */}
          <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20">
              {project.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent border border-accent/20">
              {project.category}
            </span>
            {createdDate && (
              <span className="flex items-center gap-1 text-primary/50 text-xs">
                <Calendar size={12} />
                {createdDate}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-primary/70 text-sm md:text-base leading-relaxed mt-5 md:mt-6 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div
          className={`mt-6 md:mt-8 transition-all duration-700 delay-200 ${
            infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-primary-foreground" />
            <span className="text-primary text-sm font-semibold">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl text-xs md:text-sm font-medium bg-card border border-border/30 text-primary hover:border-primary-foreground/40 hover:bg-card/80 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== HIGHLIGHTS & FEATURES GRID ===== */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-10 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div
              ref={highlightsRef}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/20 transition-all duration-700 ${
                highlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary-foreground/15">
                  <Sparkles size={18} className="text-primary-foreground" />
                </div>
                <h3 className="text-primary font-semibold text-base md:text-lg">Key Highlights</h3>
              </div>
              <ul className="space-y-2.5">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-primary/80 text-sm transition-all duration-500"
                    style={{
                      transitionDelay: highlightsVisible ? `${i * 80}ms` : "0ms",
                      opacity: highlightsVisible ? 1 : 0,
                      transform: highlightsVisible ? "translateX(0)" : "translateX(-12px)",
                    }}
                  >
                    <ChevronRight size={14} className="text-primary-foreground mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {project.featured && project.features?.length > 0 && (
            <div
              ref={featuresRef}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/20 transition-all duration-700 ${
                featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-accent/15">
                  <Zap size={18} className="text-accent" />
                </div>
                <h3 className="text-primary font-semibold text-base md:text-lg">Features</h3>
              </div>
              <ul className="space-y-2.5">
                {project.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-primary/80 text-sm transition-all duration-500"
                    style={{
                      transitionDelay: featuresVisible ? `${i * 80}ms` : "0ms",
                      opacity: featuresVisible ? 1 : 0,
                      transform: featuresVisible ? "translateX(0)" : "translateX(-12px)",
                    }}
                  >
                    <ChevronRight size={14} className="text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ===== LEARNING & CHALLENGES ===== */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6 md:mt-8">
        <div
          ref={learnRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 transition-all duration-700 ${
            learnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* What I Learned */}
          {project.learning && (
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-500/15">
                  <BookOpen size={18} className="text-blue-500" />
                </div>
                <h3 className="text-primary font-semibold text-base md:text-lg">What I Learned</h3>
              </div>
              <p className="text-primary/70 text-sm leading-relaxed">{project.learning}</p>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-border/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-orange-500/15">
                  <AlertTriangle size={18} className="text-orange-500" />
                </div>
                <h3 className="text-primary font-semibold text-base md:text-lg">Challenges</h3>
              </div>
              <p className="text-primary/70 text-sm leading-relaxed">{project.challenges}</p>
            </div>
          )}
        </div>
      </div>

      {/* ===== TAGS ===== */}
      {project.tags?.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6 md:mt-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-primary/50 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ===== BOTTOM CTA ===== */}
      <div ref={ctaRef} className="max-w-5xl mx-auto px-4 md:px-8 mt-10 md:mt-14 pb-12 md:pb-20">
        <div
          className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 via-card to-accent/10" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 p-6 md:p-10">
            <div className="text-center md:text-left">
              <h3 className="text-primary text-lg md:text-2xl font-bold">
                Check out this project
              </h3>
              <p className="text-primary/50 text-sm mt-1">
                View the live demo or explore the source code
              </p>
            </div>
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="btn-primary flex items-center gap-2"
                >
                  <span className="flex items-center gap-2"><ExternalLink size={16} /> Live Demo</span>
                </a>
              )}
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  className="btn-outline flex items-center gap-2"
                >
                  <Github size={16} />
                  Source
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Browse more link */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="text-primary/50 hover:text-primary-foreground text-sm transition-colors duration-300 group"
          >
            Browse all projects
            <ChevronRight size={14} className="inline ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
