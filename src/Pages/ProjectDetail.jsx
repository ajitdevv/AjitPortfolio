import { useParams } from "react-router-dom";
import { projects } from "../lid/utils";
import { ArrowRightSquareIcon, BookAudioIcon, GithubIcon } from "lucide-react";
const ProjectDetail = () => {
  let { id } = useParams();
  let Project = projects.find((e) => e.id.toString() === id.toString());
  if (!Project) {
    return (
      <h1 className="flex justify-center items-center text-3xl">
        This project was not found
      </h1>
    );
  }
  return (
    <div className="text-primary w-full flex flex-col justify-center items-center">
      <div className="w-full relative bg-linear-to-r max-h-screen from-primary-foreground/20 to-primary-foreground/50">
        <div className="w-full h-60 md:h-80 flex justify-center items-center">
          <img
            className="w-[70%] md:max-h-60 rounded-2xl "
            src={Project.image}
            alt={Project.title}
          />
        </div>
        <div className="flex flex-col gap-4 items-start p-3 absolute left-0 bottom-0">
          <h1 className="text-base md:text-2xl font-bold text-primary">
            {Project.title}
          </h1>
          <ul className="flex gap-1 text-foreground text-xs md:text-base *:px-1 *:py-0.5 *:rounded">
            <li className="bg-accent/60">{Project.level}</li>
            <li className="bg-green-300">{Project.status}</li>
            <li className="bg-primary">{Project.category}</li>
          </ul>
          <h2 className="text-primary text-xs">
            Created on: {Project.createdAt}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[95%]">
        <h2 className="text-xs md:text-base pt-4 text-justify px-4">{Project.description}</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-around px-3 pt-6 md:pt-8">
          <div className="bg-card p-3 w-full rounded ">
            <h1 className="flex gap-2 items-center font-semibold">
              <BookAudioIcon size={20} /> Key Highlights
            </h1>
            <hr className="border rounded-full border-primary shadow-[-shadow]" />
            <ul>
              {
                 Project?.highlights?.map((item, index) => (
                    <li key={index} className="flex items-start">
                      • {item}
                    </li>
                  ))
                }
            </ul>
          </div>
          <div className="bg-card w-full p-3 md:pl-3 md:pr-6 rounded ">
            <h1 className="flex gap-2 items-center font-semibold ">
              <BookAudioIcon size={20} /> Features
            </h1>
            <hr className="border rounded-full border-primary" />
            <ul>
              {Project.featured === true
                ? Project.features.map((item, index) => (
                    <li key={index} className="flex items-start">
                      • {item}
                    </li>
                  ))
                : "Features are not mentioned"}
            </ul>
          </div>
        </div>
        <ul className="flex text-xs md:text-base font-semibold items-center my-5 md:gap-2 p-2 rounded justify-center relative bg-linear-to-r max-h-screen from-primary-foreground/40 to-primary/20">
          { Project.stack.map((item, index) => (
                <li key={index} className="flex">
                  {item} |
                </li>
              ))}
        </ul>
        <div className="flex flex-col md:flex-row gap-3 justify-around px-3 pt-6 md:pt-8">
          <div className="bg-card p-3 w-full rounded ">
            <h1 className="font-semibold">What I Learned</h1>
            <hr className="border rounded-full border-primary" />
            <p className="text-justify text-[14px] md:text-base">{Project.learning}</p>
          </div>
          <div className="bg-card w-full p-3 md:pl-3 md:pr-6 rounded ">
            <h1 className="font-semibold ">Challenges</h1>
            <hr className="border rounded-full border-primary" />
            <p className="text-justify text-[14px] md:text-base">{Project.challenges}</p>
          </div>
        </div>
        <div className="w-full flex gap-3 justify-center py-6 items-center">
          <div className="w-30 bg-primary p-1 shadow-md rounded hover:scale-105 hover:bg-primary/70  text-background transition-all duration-300">
            <a
              className=" flex justify-center items-center gap-2"
              target="_blank"
              href={Project.demoUrl}
            >
              <ArrowRightSquareIcon size={20} />
              Live Link
            </a>
          </div>
          <div className="w-30 bg-card p-1 shadow-md rounded  hover:scale-105 hover:bg-primary/10  text-primary transition-all duration-300">
            <a
              className=" flex justify-center items-center gap-2"
              target="_blank"
              href={Project.gitUrl}
            >
              <GithubIcon size={20} />
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
