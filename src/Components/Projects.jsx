import project1 from "./musicwebsite.png";
import project12 from "./musicwebsitedark.png";
import project2 from "./moviewebsite.png";
import project3 from "./portfoliowebsite.png";
import project32 from "./portfoliowebsitedark.png";
import { ArrowRight } from "lucide-react";
function Projects() {
  return (
    <>
      <section id="projects" className="h-full">
        <h1 className="text-accent justify-center items-center my-20 ">
          Projects
        </h1>
        <div className="flex flex-row gap-2 flex-wrap justify-around items-center  ">
          <a href="https://ajitdevv.github.io/music-website/">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg w-120 h-80 ">
              <div className="w-100 h-50 overflow-hidden rounded-lg">
                <img
                  className="w-100 h-50 rounded-lg hover:scale-105 transition-transform duration-300"
                  src={project1}
                  alt=""
                />
              </div>
              <div className="flex flex-row ">
                <div className="flex flex-col items-start mt-2">
                  <h1 className="text-2xl text-primary">Music Website</h1>
                  <p className="text-sm text-primary mb-2">
                    A music website built with React and Tailwind CSS, featuring
                    a sleek design and responsive layout.
                  </p>
                </div>
                <div>
                  <span>
                    <ArrowRight className="text-primary w-10 h-5 mt-2 rotate-[-45deg]  hover:rotate-0 transition-transform duration-500  " />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://ajitdevv.github.io/music-website/">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg w-120 h-80 ">
              <div className="w-100 h-50 overflow-hidden rounded-lg">
                <img
                  className="w-100 h-50 rounded-lg hover:scale-105 transition-transform duration-300 "
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex flex-row ">
                <div className="flex flex-col items-start mt-2">
                  <h1 className="text-2xl text-primary">Music Website</h1>
                  <p className="text-sm text-primary mb-2">
                    A music website built with React and Tailwind CSS, featuring
                    a sleek design and responsive layout.
                  </p>
                </div>
                <div>
                  <span>
                    <ArrowRight className="text-primary w-10 h-5 mt-2 rotate-[-45deg]  hover:rotate-0 transition-transform duration-500  " />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://ajitdevv.github.io/music-website/">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg w-120 h-80 ">
              <div className="w-100 h-50 overflow-hidden rounded-lg">
                <img
                  className="w-100 h-50 rounded-lg hover:scale-105 transition-transform duration-300 "
                  src={project3}
                  alt=""
                />
              </div>
              <div className="flex flex-row ">
                <div className="flex flex-col items-start mt-2">
                  <h1 className="text-2xl text-primary">Music Website</h1>
                  <p className="text-sm text-primary mb-2">
                    A music website built with React and Tailwind CSS, featuring
                    a sleek design and responsive layout.
                  </p>
                </div>
                <div>
                  <span>
                    <ArrowRight className="text-primary w-10 h-5 mt-2 rotate-[-45deg]  hover:rotate-0 transition-transform duration-500  " />
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://ajitdevv.github.io/music-website/">
            <div className="flex flex-col items-center bg-card p-6 rounded-lg w-120 h-80 ">
              <div className="w-100 h-50 overflow-hidden rounded-lg">
                <img
                  className="w-100 h-50 rounded-lg hover:scale-105 transition-transform duration-300 "
                  src={project1}
                  alt=""
                />
              </div>
              <div className="flex flex-row ">
                <div className="flex flex-col items-start mt-2">
                  <h1 className="text-2xl text-primary">Music Website</h1>
                  <p className="text-sm text-primary mb-2">
                    A music website built with React and Tailwind CSS, featuring
                    a sleek design and responsive layout.
                  </p>
                </div>
                <div>
                  <span>
                    <ArrowRight className="text-primary w-10 h-5 mt-2 rotate-[-45deg]  hover:rotate-0 transition-transform duration-500  " />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
export default Projects;
