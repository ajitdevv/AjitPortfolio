import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useAnimations";
import { skills, marqueeIcons } from "../lid/skills";

// Show only first 8 on home
const previewSkills = skills.slice(0, 8);

function SkillCard({ skill, index }) {
  const [cardRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`relative group p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/30
        transition-all duration-500 cursor-default
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: isVisible ? `${(index % 8) * 80}ms` : "0ms" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` }}
      />
      <div className="flex items-center gap-3">
        <div
          className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.Icon size={28} color={skill.color} />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <h3 className="text-primary font-semibold text-sm md:text-base truncate">{skill.title}</h3>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-0.5"
            style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
          >
            {skill.experience}
          </span>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 group-hover:w-3/4 w-0"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
}

function Skills() {
  const [headingRef, headingVisible] = useScrollReveal();
  const [btnRef, btnVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1
          ref={headingRef}
          className={`text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="text-primary-foreground">Skills</span>
        </h1>
        <p
          className={`text-primary/50 mt-3 text-sm md:text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies and tools I work with daily
        </p>
      </div>

      {/* Preview Grid — 8 skills */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {previewSkills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

      {/* View All button */}
      <div
        ref={btnRef}
        className={`flex justify-center mt-8 md:mt-10 transition-all duration-700 ${
          btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Link
          to="/skills"
          className="btn-outline flex items-center gap-2 group"
        >
          View All Skills
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Marquee */}
      <div className="mt-14 md:mt-18 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee-track">
          {[...marqueeIcons, ...marqueeIcons].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mx-4 md:mx-6 shrink-0">
              <item.Icon
                className="w-8 h-8 md:w-10 md:h-10 opacity-40 hover:opacity-100 transition-opacity duration-300"
                color={item.color}
              />
              <span className="text-primary/30 text-xs md:text-sm font-medium hidden md:block">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
