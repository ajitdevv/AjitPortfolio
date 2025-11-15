import project1 from "./musicwebsite.png";
import project2 from "./moviewebsite.png";
import project3 from "./portfoliowebsite.png";
import { ArrowRight, Github } from "lucide-react";
import { SiGit } from "react-icons/si";
const projects = [
  {
    id: 1,
    title: "Music Night ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image: project1,
    tags: ["HTML ", "Css ", "JavaScript "],
    demoUrl: "https://ajitdevv.github.io/music-website/",
    gitUrl: "https://ajitdevv.github.io/music-website/",
  },
  {
    id: 2,
    title: "Movie day ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image: project2,
    tags: ["HTML", "Css", "JavaScript"],
    demoUrl: "https://ajitdevv.github.io/music-website/",
    gitUrl: "https://ajitdevv.github.io/music-website/",
  },
  {
    id: 3,
    title: "Portfolio ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image: project3,
    tags: ["HTML", "Css", "JavaScript"],
    demoUrl: "https://ajitdevv.github.io/music-website/",
    gitUrl: "https://ajitdevv.github.io/music-website/",
  },
];
function project() {
  return (
    <section id="projects">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {projects.map((project, key) => (
          <div
            key={key}
            className="flex flex-col items-center justify-center p-3 rounded-2xl  bg-accent"
          >
            <div className="overflow-hidden rounded-2xl ">
              <img
                className="w-100 h-70 hover:scale-105 rounded-2xl transition-transform duration-300"
                src={project.image}
                alt=" Project image not found"
              />
            </div>
            <div className="flex flex-row ">
              <div className="flex flex-col items-start ">
                <h2 className="text-glow gap-1 text-primary text-xl">
                  {project.tags}
                </h2>
                <h3 className="text-primary">{project.title}</h3>
                <p>{project.Description}</p>
              </div>
              <div className="ml-2">
                <a href={project.demoUrl} target="_blank">
                  <ArrowRight className="w-6 h-5 text-primary my-3 rotate-315" />
                </a>
                <a href={project.gitUrl} target="_blank">
                  <SiGit className="w-6 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default project;
