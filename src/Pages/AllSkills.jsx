import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useScrollReveal } from "../hooks/useAnimations";
import { skills, categories } from "../lid/skills";
import Starbackground from "../Components/background";
import ScrollProgress from "../Components/ScrollProgress";

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

function AllSkills() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [headingRef, headingVisible] = useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.type === selectedCategory);

  const categoryCount = (cat) =>
    cat === "All" ? skills.length : skills.filter((s) => s.type === cat).length;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Starbackground />

      {/* Top bar */}
      <div className="fixed top-0 left-0 w-full z-50 glass-strong">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h2 className="text-primary font-semibold text-sm md:text-base">All Skills</h2>
          <div className="w-16" />
        </div>
      </div>

      <div className="pt-20 md:pt-24 pb-16 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            ref={headingRef}
            className={`text-3xl md:text-5xl font-bold text-primary transition-all duration-700 ${
              headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            All <span className="text-primary-foreground">Skills</span> & Tools
          </h1>
          <p
            className={`text-primary/50 mt-3 text-sm md:text-base max-w-md mx-auto transition-all duration-700 delay-200 ${
              headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything I use to bring ideas to life
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex gap-1.5 md:gap-2 glass rounded-full p-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "btn-primary !py-1.5 !md:py-2 !px-3 !md:px-5 !rounded-full"
                    : "text-primary/60 hover:text-primary"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${selectedCategory === cat ? "opacity-80" : "opacity-40"}`}>
                  ({categoryCount(cat)})
                </span>
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

        {/* Summary */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center gap-4 md:gap-6 flex-wrap">
          {categories.filter((c) => c !== "All").map((cat) => (
            <div
              key={cat}
              className="glass-subtle rounded-xl px-4 py-2 text-center cursor-pointer transition-all duration-300 hover:glass"
              onClick={() => setSelectedCategory(cat)}
            >
              <span className="text-primary-foreground text-lg font-bold">{categoryCount(cat)}</span>
              <p className="text-primary/40 text-xs">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllSkills;
