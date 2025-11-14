import { useEffect } from "react";
import Aos from "aos";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="skills" className="h-full">
      <style>
        {`.inear{
        margin: 100px auto;
        width: 70%;
        border-left: 2px solid black;
        border-right: 2px solid black;
        display: flex;
        overflow-x: auto;
        }
        .inear::-webkit-scrollbar{
        display: none;
        }
        .group{
        display: flex;
        gap: 50px;
        padding-right: 20px;
        animation: scroll 5s linear infinite;
        }
        @keyframes scroll{
        from{
        translate:0;
        }
        to{
        translate:-100%;
        }

        .devv{
    flex:0 0 5em;
        } 

         
        `}
      </style>
      <div className="inear">
        <div className="flex group flex-row gap-10">
          <SiHtml5 size={70} className="devv" color="#E34F26" />
          <SiReact size={70} className="devv" color="#61DAFB" />
          <SiCss3 size={70} className="devv" color="#1572B6" />
          <SiTailwindcss size={70} className="devv" color="#38B2AC" />
          <SiJavascript size={70} className="devv" color="#F7DF1E" />
          <SiHtml5 size={70} className="devv" color="#E34F26" />
          <SiReact size={70} className="devv" color="#61DAFB" />
          <SiCss3 size={70} className="devv" color="#1572B6" />
          <SiTailwindcss size={70} className="devv" color="#38B2AC" />
          <SiJavascript size={70} className="devv" color="#F7DF1E" />
        </div>
        <div aria-hidden className="flex group flex-row gap-10">
          <SiHtml5 size={70} className="devv" color="#E34F26" />
          <SiReact size={70} className="devv" color="#61DAFB" />
          <SiCss3 size={70} className="devv" color="#1572B6" />
          <SiTailwindcss size={70} className="devv" color="#38B2AC" />
          <SiJavascript size={70} className="devv" color="#F7DF1E" />
          <SiHtml5 size={70} className="devv" color="#E34F26" />
          <SiReact size={70} className="devv" color="#61DAFB" />
          <SiCss3 size={70} className="devv" color="#1572B6" />
          <SiJavascript size={70} className="devv" color="#F7DF1E" />
          <SiTailwindcss size={70} className="devv" color="#38B2AC" />
        </div>
      </div>
      <div className="relative">
        <div className="[&>*]:z-[40] [&>*]:cursor-pointer [&>*]:hover:underline">
          <h1
            data-aos="fade-up"
            data-aos-offset="50"
            className="text-primary mb-6 text-5xl"
          >
            Start
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-offset="70"
            className="text-primary mb-2 text-5xlv absolute top-39 right-80 text-3xl max-sm:text-xl max-sm:right-6 "
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            HTML5
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-offset="70"
            className="text-primary mb-2 text-5xlv absolute top-64 left-85 text-3xl max-sm:text-xl max-sm:left-8 "
          >
            CSS 3
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-offset="70"
            className="text-primary mb-2 text-5xlv absolute top-89 right-71 text-3xl max-sm:text-xl max-sm:right-0 max-sm:wrap-normal  "
          >
            JavaScript
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-offset="70"
            className="text-primary mb-2 text-5xlv absolute top-114 left-80 text-3xl max-sm:text-xl max-sm:left-5 "
          >
            React.js
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-offset="70"
            className="text-primary mb-2 text-5xlv absolute top-139 right-64 text-3xl max-sm:text-xl max-sm:right-1 max-sm:wrap-normal  max-sm:w-20"
          >
            <a href="#home"> Tailwind CSS</a>
          </h1>
          <h1
            data-aos="fade-down"
            data-aos-offset="0"
            className="text-primary absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl max-sm:text-3xl max-sm:bottom-80 "
          >
            Progress..
          </h1>
        </div>
        <div className="min-h-screen relative [&>*]:bg-accent">
          <div className="absolute top-1 bottom-0 left-1/2 -translate-x-1/2 w-1 h-130"></div>
          <div className="absolute top-25 bottom-0 left-1/2 -translate-x-0 w-50 h-1  max-sm:w-30"></div>
          <div className="absolute top-50 bottom-0 right-1/2 -translate-x-0 w-50 h-1  max-sm:w-30"></div>
          <div className="absolute top-75 bottom-0 left-1/2 -translate-x-0 w-50 h-1  max-sm:w-30"></div>
          <div className="absolute top-100 bottom-0 right-1/2 -translate-x-0 w-50 h-1  max-sm:w-30"></div>
          <div className="absolute top-125 bottom-0 left-1/2 -translate-x-0 w-50 h-1  max-sm:w-30"></div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
