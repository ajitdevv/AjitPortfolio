import project1 from "./musicwebsite.png";
import project2 from "./moviewebsite.png";
import project3 from "./portfoliowebsite.png";
import { ArrowRight } from "lucide-react";
import { SiGit } from "react-icons/si";
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const projects = [
  {
    id: 1,
    title: "Music Night ",
    Description:
      "Designed and developed a clean and responsive Music Website UI that allows users to seamlessly explore various music categories. The interface focuses on a modern layout, smooth interactions, and mobile-first responsiveness to ensure an optimized experience across all devices. ",
    image: project1,
    tags: ["HTML, ", "Css, ", "JavaScript "],
    demoUrl: "https://ajitdevv.github.io/music-website/",
    gitUrl: "https://github.com/ajitdevv/music-website",
  },
  // {
  //   id: 2,
  //   title: "Movie day ",
  //   Description:
  //     "Built a responsive Movie Web App with a clean UI, allowing users to browse, search, and explore movie details. Integrated a real-time Movies API for dynamic content. Optimized for mobile and desktop, and deployed on Vercel for fast, reliable performance.",
  //   image: project2,
  //   tags: ["React.js, ", "tailwind CSS, ", "API, ", "Vercel"],
  //   demoUrl: "https://movie-app-nine-opal.vercel.app/",
  //   gitUrl: "https://github.com/ajitdevv/movie-app",
  // },
  // {
  //   id: 3,
  //   title: "Portfolio ",
  //   Description:
  //     "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
  //   image: project3,
  //   tags: ["HTML, ", "Css , ", "JavaScript"],
  //   demoUrl: "https://ajitdevv.github.io/music-website/",
  //   gitUrl: "https://ajitdevv.github.io/music-website/",
  // },
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
      className="mt-15 w-full max-sm:mt-[-200px] flex flex-col items-center justify-center "
    >
      <div className=" ">
        <h1 
              data-aos="fade-right"
              data-aos-offset="150" className="text-primary-foreground bold text-5xl font-bold  flex justify-start  mb-6 ">
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
              className="flex flex-col items-center max-sm:flex-col max-sm:w-100 justify-center p-3 rounded-2xl  bg-foreground w-120 h-80 overflow-hidden"
              >
              <div className="overflow-hidden rounded-2xl ">
                <img
                  className="w-100 h-70 hover:scale-105 rounded-2xl transition-transform duration-300"
                  src={project.image}
                  alt=" Project image not found"
                />
              </div>
              <div className="flex flex-row justify-between items-start w-full">

                <div className="flex flex-col justify-between items-start  [&>*]:text-primary">
                  <h2 className="highlight-text highlight-text ml-5 text-xl">{project.tags }</h2>
                  <h3 className="text-lg ml-7">{project.title}</h3>
                  <p className=" ml-7 ">
                    {isExpanded ? project.Description : shortText + "..."}
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
                    <ArrowRight className="w-6 h-5 my-3 text-primary rotate-[-45deg] hover:rotate-0 hover:scale-125 transition-transform duration-400" />

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
