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
    <section id="skills">
      <style>
        {`.inear{
        margin: 100px auto;
        width: 90%;
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
      <div>
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          className="text-primary mb-2 text-5xl"
        >
          Start
        </h1>
      </div>
      <div className="min-h-screen relative">
        <div className="absolute top-1 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-primary"></div>
      </div>
    </section>
  );
}
export default Skills;
