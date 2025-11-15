import project1 from "./musicwebsite.png";
import project12 from "./musicwebsitedark.png";
import project2 from "./moviewebsite.png";
import project3 from "./portfoliowebsite.png";
import project32 from "./portfoliowebsitedark.png";
import { BiRightArrow } from "react-icons/bi";
function Projects() {
  return (
    <>
      <section id="projects" className="h-full">
        <h1 className="text-accent justify-center items-center my-20">
          Projects
        </h1>
        <div className="mb-10">
          <a href="https://ajitdevv.github.io/music-website/">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg w-120 h-80 ">
              <div>
                <img className="w-100 rounded-lg" src={project1} alt="" />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-2xl text-primary">Music Website</h1>
                <p className="text-sm text-primary mb-2">
                  A music website built with React and Tailwind CSS, featuring a sleek design and responsive layout.
                </p>
              </div>
              <span><BiRightArrow/></span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
export default Projects;
