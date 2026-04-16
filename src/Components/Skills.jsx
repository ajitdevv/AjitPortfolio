import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useAnimations";
import {
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { MdPsychology, MdPhoneIphone, MdDesignServices } from "react-icons/md";
import { RiPlugLine } from "react-icons/ri";
import { VscVscode, VscDebugAlt } from "react-icons/vsc";

const skills = [
  { id: 1, title: "HTML", Icon: SiHtml5, color: "#E34F26", experience: "3+ Year", type: "Frontend" },
  { id: 2, title: "CSS", Icon: SiCss3, color: "#1572B6", experience: "3+ Year", type: "Frontend" },
  { id: 3, title: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", experience: "2+ Year", type: "Frontend" },
  { id: 4, title: "React", Icon: SiReact, color: "#61DAFB", experience: "2+ Year", type: "Frontend" },
  { id: 7, title: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC", experience: "1.5+ Year", type: "Frontend" },
  { id: 8, title: "Git", Icon: SiGit, color: "#F1502F", experience: "1+ Year", type: "Tools" },
  { id: 9, title: "Github", Icon: SiGithub, color: "#181717", experience: "1+ Year", type: "Tools" },
  { id: 10, title: "Vercel", Icon: SiVercel, color: "#000000", experience: "1+ Year", type: "Tools" },
  { id: 11, title: "Figma", Icon: SiFigma, color: "#F24E1E", experience: "1.5+ Year", type: "Tools" },
  { id: 12, title: "ChatGPT", Icon: SiOpenai, color: "#10A37F", experience: "3+ Year", type: "Tools" },
  { id: 13, title: "VS Code", Icon: VscVscode, color: "#007ACC", experience: "3+ Year", type: "Tools" },
  { id: 14, title: "Node.js", Icon: SiNodedotjs, color: "#68A063", experience: "Fresher", type: "Backend" },
  { id: 15, title: "Express.js", Icon: SiExpress, color: "#000000", experience: "Fresher", type: "Backend" },
  { id: 16, title: "MongoDB", Icon: SiMongodb, color: "#47A248", experience: "Fresher", type: "Backend" },
  { id: 17, title: "MySQL", Icon: SiMysql, color: "#4479A1", experience: "Fresher", type: "Backend" },
  { id: 18, title: "Problem Solving", Icon: MdPsychology, color: "#4A90E2", experience: "Strong", type: "Extra" },
  { id: 19, title: "API Handling", Icon: RiPlugLine, color: "#264653", experience: "1+ Year", type: "Extra" },
  { id: 20, title: "Responsive Design", Icon: MdPhoneIphone, color: "#2A9D8F", experience: "Expert", type: "Extra" },
  { id: 21, title: "UI/UX Sense", Icon: MdDesignServices, color: "#E9C46A", experience: "Strong", type: "Extra" },
  { id: 22, title: "Debugging", Icon: VscDebugAlt, color: "#E63946", experience: "Strong", type: "Extra" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Extra"];

// Marquee icons for the infinite scroll ticker
const marqueeIcons = [
  { Icon: SiHtml5, color: "#E34F26", name: "HTML" },
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiCss3, color: "#1572B6", name: "CSS" },
  { Icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JS" },
  { Icon: SiNodedotjs, color: "#68A063", name: "Node" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiGit, color: "#F1502F", name: "Git" },
  { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { Icon: VscVscode, color: "#007ACC", name: "VS Code" },
];

function SkillCard({ skill, index }) {
  const [cardRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/30
        transition-all duration-500 cursor-default
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: isVisible ? `${(index % 8) * 80}ms` : "0ms",
      }}
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Icon + Content */}
      <div className="flex items-center gap-3">
        <div
          className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.Icon
            size={28}
            color={skill.color}
            className="transition-all duration-300"
          />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <h3 className="text-primary font-semibold text-sm md:text-base truncate">
            {skill.title}
          </h3>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-0.5"
            style={{
              color: skill.color,
              backgroundColor: `${skill.color}15`,
            }}
          >
            {skill.experience}
          </span>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 group-hover:w-3/4 w-0"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
}

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [headingRef, headingVisible] = useScrollReveal();
  const [filterRef, filterVisible] = useScrollReveal();

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.type === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      {/* Section Header */}
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
          className={`text-primary/60 mt-3 text-sm md:text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies and tools I work with daily
        </p>
      </div>

      {/* Category Filter */}
      <div
        ref={filterRef}
        className={`flex justify-center mb-8 md:mb-12 transition-all duration-700 ${
          filterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex gap-1.5 md:gap-2 bg-card/60 backdrop-blur-md rounded-full p-1.5 border border-border/30 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-primary text-foreground shadow-md"
                  : "text-primary hover:text-primary-foreground hover:bg-card/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredSkills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="mt-16 md:mt-20 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex marquee-track">
          {[...marqueeIcons, ...marqueeIcons].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-4 md:mx-6 shrink-0"
            >
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
