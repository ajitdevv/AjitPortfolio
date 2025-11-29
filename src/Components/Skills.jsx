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

        .icon{
    flex:0 0 5em;
        } 

         
        `}
      </style>
      <div className="inear border-l-2 border-r-2 border-black w-[70%] max-sm:w-full ">
        <div className="flex group flex-row gap-10">
          <SiHtml5 size={70} className="icon" color="#E34F26" />
          <SiReact size={70} className="icon" color="#61DAFB" />
          <SiCss3 size={70} className="icon" color="#1572B6" />
          <SiTailwindcss size={70} className="icon" color="#38B2AC" />
          <SiJavascript size={70} className="icon" color="#F7DF1E" />
          <SiHtml5 size={70} className="icon" color="#E34F26" />
          <SiReact size={70} className="icon" color="#61DAFB" />
          <SiCss3 size={70} className="icon" color="#1572B6" />
          <SiTailwindcss size={70} className="icon" color="#38B2AC" />
          <SiJavascript size={70} className="icon" color="#F7DF1E" />
        </div>
        <div aria-hidden className="flex group flex-row gap-10">
          <SiHtml5 size={70} className="icon" color="#E34F26" />
          <SiReact size={70} className="icon" color="#61DAFB" />
          <SiCss3 size={70} className="icon" color="#1572B6" />
          <SiTailwindcss size={70} className="icon" color="#38B2AC" />
          <SiJavascript size={70} className="icon" color="#F7DF1E" />
          <SiHtml5 size={70} className="icon" color="#E34F26" />
          <SiReact size={70} className="icon" color="#61DAFB" />
          <SiCss3 size={70} className="icon" color="#1572B6" />
          <SiJavascript size={70} className="icon" color="#F7DF1E" />
          <SiTailwindcss size={70} className="icon" color="#38B2AC" />
        </div>
      </div>
      <div className="relative">
        <div className="w-full flex flex-col items-center py-10 relative">
          <h1
            data-aos="fade-up"
            data-aos-offset="50"
            className="text-4xl font-bold mb-10 text-primary"
          >
            Start
          </h1>
          <div className="w-1 bg-accent h-[432px] lg:h-[632px] relative"></div>
          <div className="size-4 rounded-full bg-accent top-28 absolute"></div>
          <div className="absolute top-40 lg:top-50 left-1/2 flex items-center gap-4">
            <div className="w-24 sm:w-57 lg:w-65 h-1 bg-accent"></div>
            <h2
              data-aos="fade-left"
              data-aos-offset="70"
              className="text-xl sm:text-2xl font-semibold text-primary"
            >
              HTML5
            </h2>
          </div>
          <div className="absolute top-60 lg:top-80 right-1/2 flex items-center gap-4">
            <h2
              data-aos="fade-right"
              data-aos-offset="70"
              className="text-xl sm:text-2xl font-semibold text-primary"
            >
              CSS 3
            </h2>
            <div className="w-24 sm:w-57 lg:w-65 h-1 bg-accent"></div>
          </div>
          <div className="absolute top-80 lg:top-110 left-1/2 flex items-center gap-4">
            <div className="w-24 sm:w-57 lg:w-65 h-1 bg-accent"></div>
            <h2
              data-aos="fade-left"
              data-aos-offset="70"
              className="text-xl sm:text-2xl font-semibold text-primary"
            >
              JavaScript
            </h2>
          </div>

          <div className="absolute top-100 lg:top-140 right-1/2 flex items-center gap-4">
            <h2
              data-aos="fade-right"
              data-aos-offset="70"
              className="text-xl sm:text-2xl font-semibold text-primary"
            >
              React.js
            </h2>
            <div className="w-24 sm:w-57 lg:w-70 h-1 bg-accent"></div>
          </div>

          <div className="absolute top-120 lg:top-160 left-1/2 flex items-center gap-4">
            <div className="w-24 sm:w-57 lg:w-65 h-1 bg-accent"></div>
            <h2
              data-aos="fade-left"
              data-aos-offset="70"
              className="text-xl sm:text-2xl font-semibold text-primary"
            >
              Tailwind CSS
            </h2>
          </div>
          <h1
            data-aos="fade-down"
            data-aos-offset="0"
            className="absolute bottom-0 text-3xl font-bold text-primary"
          >
            Progress..
          </h1>
        </div>
      </div>
    </section>
  );
}
export default Skills;
