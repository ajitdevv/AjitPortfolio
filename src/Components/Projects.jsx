import project1 from "./musicwebsite.png";
import project2 from "./moviewebsite.png";
import project3 from "./portfoliowebsite.png";
const projects = [
  {
    id: 1,
    title: "Music Night ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image: project1,
    tags: ["HTML ", "Css ", "JavaScript "],
    demoUrl: "https://ajitdevv.github.io/music-website/",
  },
  {
    id: 2,
    title: "Movie day ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image: project2,
    tags: ["HTML", "Css", "JavaScript"],
    demoUrl: "https://ajitdevv.github.io/music-website/",
  },
  {
    id: 3,
    title: "Portfolio ",
    Description:
      "lorem ldjshadl alsdhjf ahjaks asdfh  kad  ldiuwe8  lakhd  aksdg ",
    image:project3,
    tags: ["HTML", "Css", "JavaScript"],
    demoUrl: "https://ajitdevv.github.io/music-website/",
  },
];
function project() {
  return (
    <section id="projects">
      <div>
        <h1>Projects</h1>
      </div>
      <div>
        {projects.map((project, key) => (
          <div key={key}>
            <div>
              <img
                className="w-100 h-70"
                src={project.image}
                alt=" Project image not found"
              />
            </div>
            <div>
              <h2 className="text-glow gap-1 text-primary text-xl">
                {project.tags}
              </h2>
              <h3 className="text-primary">{project.title}</h3>
              <p>{project.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default project;
