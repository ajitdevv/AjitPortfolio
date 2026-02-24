import { ArrowRight } from "lucide-react";
import { SiGit } from "react-icons/si";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects } from "../lid/utils";
import { useNavigate } from "react-router-dom";

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  let Navgation = useNavigate();
  const handelprojectdatile = (project) => {
    Navgation(`/project/${project.id}`);
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
          return (
            <div
              data-aos="fade-up"
              data-aos-offset="150"
              key={key}
              className="flex flex-col items-center shadow-sm  max-sm:flex-col max-sm:w-80  justify-center p-3 rounded-xl  bg-foreground w-120 h-80 overflow-hidden group"
            >
              <div className="overflow-hidden rounded-xl">
                <a
                  onClick={() => {
                    handelprojectdatile(project);
                  }}
                >
                  <img
                    className="w-full h-full max-sm:h-40 object-cover group-hover:scale-105 rounded-xl transition-transform cursor-pointer duration-300"
                    src={project.image ? project.image : null}
                    alt=" Project image not found"
                  />
                </a>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col justify- items-start  *:text-primary">
                  <h3 className="text-lg ml-5 font-bold">{project.title}</h3>
                  <h2 className="highlight-tex ml-5 md:text-xl">
                    Category :- {project.category}
                  </h2>
                  <h2 className="highlight-tex ml-5 text-sx md:text-base">
                    Status :- {project.status}
                  </h2>
                </div>
                <div className="mr-7">
                  <a href={project.demoUrl} target="_blank">
                    <ArrowRight className="w-6 h-5 my-3 text-primary   -rotate-45 hover:text-accent group-hover:rotate-0 group-hover:scale-125 transition-transform duration-400" />
                  </a>
                  <a href={project.gitUrl} target="_blank">
                    <SiGit className="w-6 h-5 text-primary group-hover:scale-125 hover:text-accent  transition-transform duration-300" />
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
