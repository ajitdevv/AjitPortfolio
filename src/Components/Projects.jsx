import project1 from "../assets/image/musicwebsite.png";
import project2 from "../assets/image/moviewebsite.png";
import project3 from "../assets/image/portfoliowebsite.png";
import { ArrowRight } from "lucide-react";
import { SiGit } from "react-icons/si";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    Description:
      "Architected and developed a modern, production-ready personal portfolio to showcase frontend projects and skills. Built with React.js and Tailwind CSS using a component-driven approach, featuring responsive layouts, dark/light theme support, smooth animations, and optimized performance. Deployed to Vercel with a focus on clean UI, accessibility, and fast load times.",
    image: project3,
    tags: ["React.js ", "Tailwind CSS ", "Responsive UI ", "Dark Mode ", "Vercel"],
    demoUrl: "https://ajit-portfolio-rust.vercel.app/",
    gitUrl: "https://github.com/ajitdevv/portfolio",
  },
  {
    id: 2,
    title: "Marketing Landing Page",
    Description:
      "Designed and developed a modern, conversion-focused marketing landing page with a clean UI and responsive layout. Built reusable sections such as hero, features, testimonials, and call-to-action using React.js and Tailwind CSS. Optimized for performance and deployed to production on Vercel.",
    image: "project4",
    tags: ["React.js ", "Tailwind CSS ", "Responsive UI ", "Vercel"],
    demoUrl: "https://morden-landing-page-psi.vercel.app/",
    gitUrl: "https://github.com/ajitdevv/MordenLandingPage",
  },
  {
    id: 3,
    title: "Movie Day",
    Description:
      "Built a responsive Movie Web App with a clean UI, allowing users to browse, search, and explore movie details. Integrated a real-time Movies API for dynamic content. Optimized for mobile and desktop, and deployed on Vercel for fast, reliable performance.",
    image: project2,
    tags: ["React.js ", "Tailwind CSS ", "API ", "Vercel"],
    demoUrl: "https://movie-app-nine-opal.vercel.app/",
    gitUrl: "https://github.com/ajitdevv/movie-app",
  },
  {
    id: 4,
    title: "Music Night",
    Description:
      "Designed and developed a clean and responsive Music Website UI that allows users to seamlessly explore various music categories. The interface focuses on a modern layout, smooth interactions, and mobile-first responsiveness to ensure an optimized experience across all devices.",
    image: project1,
    tags: ["HTML ", "CSS ", "JavaScript ", "Responsive UI "],
    demoUrl: "https://ajitdevv.github.io/music-website/",
    gitUrl: "https://github.com/ajitdevv/music-website",
  },
];

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [expandId, setexpandId] = useState(null);

  const toggleExpand = (id) => {
    setexpandId(expandId === id ? null : id);
  };
  return (
    <section
      id="projects"
      className="mt-15 w-full flex flex-col items-center justify-center "
    >
      <div className=" ">
        <h1
          data-aos="fade-right"
          data-aos-offset="150"
          className="text-primary-foreground bold text-5xl font-bold  flex justify-start  mb-6 "
        >
          Projects
        </h1>
      </div>
      <div className="flex flex-row flex-wrap max-sm:flex-col  justify-center gap-5">
        {projects.map((project, key) => {
          const isExpanded = expandId === project.id;
          const shortText = project.Description.substring(0, 20);
          return (
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              key={key}
              className="flex flex-col items-center max-sm:flex-col max-sm:w-80 justify-center p-3 rounded-2xl  bg-foreground w-120 h-80 overflow-hidden"
            >
              <div className="overflow-hidden rounded-2xl ">
                <img
                  className="w-100 h-70 hover:scale-105 rounded-2xl transition-transform duration-300"
                  src={project.image}
                  alt=" Project image not found"
                />
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col justify- items-start  *:text-primary">
                  <h2 className="highlight-tex ml-5 text-xl">{project.tags}</h2>
                  <h3 className="text-lg ml-5 font-bold">{project.title}</h3>
                  <p className=" ml-5 ">
                    {isExpanded ? project.Description : shortText + "..."} "
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="primary-button ml-7 hover:underline"
                    >
                      {isExpanded ? "Read Less" : " Read More"}
                    </button>
                  </p>
                </div>
                <div className="mr-7">
                  <a href={project.demoUrl} target="_blank">
                    <ArrowRight className="w-6 h-5 my-3 text-primary -rotate-45deg hover:rotate-0 hover:scale-125 transition-transform duration-400" />
                  </a>
                  <a href={project.gitUrl} target="_blank">
                    <SiGit className="w-6 h-5 text-primary hover:scale-125 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Project;
