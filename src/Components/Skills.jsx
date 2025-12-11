import { useEffect, useState } from "react";
import Aos from "aos";
import {
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiVscodium,
} from "react-icons/si";
import { MdPsychology, MdPhoneIphone, MdDesignServices } from "react-icons/md";
import { RiPlugLine } from "react-icons/ri";
import { VscVscode, VscDebugAlt } from "react-icons/vsc";

const skills = [
  // ================================
  //             FRONTEND
  // ================================
  {
    id: 1,
    title: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
    exprince: "3+ Year",
    type: "Frontend",
  },
  {
    id: 2,
    title: "CSS",
    Icon: SiCss3,
    color: "#1572B6",
    exprince: "3+ Year",
    type: "Frontend",
  },
  {
    id: 3,
    title: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    exprince: "2+ Year",
    type: "Frontend",
  },
  {
    id: 4,
    title: "React",
    Icon: SiReact,
    color: "#61DAFB",
    exprince: "2+ Year",
    type: "Frontend",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#38B2AC",
    exprince: "1.5+ Year",
    type: "Frontend",
  },

  // ================================
  //               TOOLS
  // ================================
  {
    id: 8,
    title: "Git",
    Icon: SiGit,
    color: "#F1502F",
    exprince: "1+ Year",
    type: "Tools",
  },
  {
    id: 9,
    title: "Github",
    Icon: SiGithub,
    color: "#181717",
    exprince: "1+ Year",
    type: "Tools",
  },
  {
    id: 10,
    title: "Vercel",
    Icon: SiVercel,
    color: "#000000",
    exprince: "1+ Year",
    type: "Tools",
  },
  {
    id: 11,
    title: "Figma",
    Icon: SiFigma,
    color: "#F24E1E",
    exprince: "1.5+ Year",
    type: "Tools",
  },
  {
    id: 12,
    title: "ChatGPT",
    Icon: SiOpenai,
    color: "#10A37F",
    exprince: "3+ Year",
    type: "Tools",
  },
  {
    id: 13,
    title: "VS Code",
    Icon: VscVscode,
    color: "#007ACC",
    exprince: "3+ Year",
    type: "Tools",
  },

  // ================================
  //             BACKEND
  // ================================
  {
    id: 14,
    title: "Node.js",
    Icon: SiNodedotjs,
    color: "#68A063",
    exprince: "Fresher",
    type: "Backend",
  },
  {
    id: 15,
    title: "Express.js",
    Icon: SiExpress,
    color: "#000000",
    exprince: "Fresher",
    type: "Backend",
  },
  {
    id: 16,
    title: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    exprince: "Fresher",
    type: "Backend",
  },
  {
    id: 17,
    title: "MySQL",
    Icon: SiMysql,
    color: "#4479A1",
    exprince: "Fresher",
    type: "Backend",
  },

  // ================================
  //          EXTRA SKILLS (TOP 5)
  // ================================
  {
    id: 18,
    title: "Problem Solving",
    // Icon: MdPsychology,
    Icon: MdPsychology,
    color: "#4A90E2",
    exprince: "Strong",
    type: "Extra",
  },
  {
    id: 19,
    title: "API Handling",
    Icon: RiPlugLine,
    color: "#264653",
    exprince: "1+ Year",
    type: "Extra",
  },

  {
    id: 20,
    title: "Responsive Design",
    Icon: MdPhoneIphone,
    color: "#2A9D8F",
    exprince: "Expert",
    type: "Extra",
  },
  {
    id: 21,
    title: "UI/UX Sense",
    Icon: MdDesignServices,
    color: "#E9C46A",
    exprince: "Strong",
    type: "Extra",
  },
  {
    id: 22,
    title: "Debugging",
    Icon: VscDebugAlt,
    color: "#E63946",
    exprince: "Strong",
    type: "Extra",
  },
];

const cetegry = ["All", "Frontend", "Backend", "Tools", "Extra"];

function Skills() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [selectedCetegry, setSelectedCetegry] = useState("All");
  const filteredSkills =
    selectedCetegry === "All"
      ? skills
      : skills.filter((s) => s.type === selectedCetegry);
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

      <hr />

      <div className="w-full place-items-center flex flex-col mt-10">
        <div
          data-aos="fade-down"
          data-aos-offset="150"
          data-aos-duration="1000"
          className="flex gap-4 max-sm:gap-0 max-w-sm:[90%] items-center justify-center mt-5 mb-7"
        >
          {cetegry.map((cetegry, key) => {
            return (
              <div
                key={key}
                onClick={() => setSelectedCetegry(cetegry)}
                className={`arrow text-primary font-bold hover:cursor-pointer 
  ${
    selectedCetegry === cetegry
      ? "bg-card m-1 px-2 rounded-2xl py-1"
      : "m-1 px-2 py-1"
  }
`}
              >
                {cetegry}
              </div>
            );
          })}
        </div>
        <div  data-aos="fade-up"
          data-aos-offset="150"
          data-aos-duration="1000" className="grid grid-cols-4 max-sm:grid-cols-2 place-items-center justify-center items-center gap-x-15 gap-8 max-sm:gap-4">
          {filteredSkills.map((skill, key) => {
            return (
              <div
                key={key}
                className="flex flex-row w-38 gap-2 card items-start rounded-2xl hover:scale-115 transition-transform transition-duration:300px "
              >
                <div>
                  <skill.Icon size={40} color={skill.color} />
                </div>
                <div className="items-start ">
                  <h1 className="text-primary font-bold">{skill.title}</h1>
                  <h3 className="text-primary pl-1 w-max">{skill.exprince}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="inear border-l-2 border-r-2 no-scrollbar border-black w-[70%] max-sm:w-full ">
        <div className="flex group flex-row gap-10 *:size-15 *:max-sm:size-10 ">
          <SiHtml5 className="icon" color="#E34F26" />
          <SiReact className="icon" color="#61DAFB" />
          <SiCss3 className="icon" color="#1572B6" />
          <SiTailwindcss className="icon" color="#38B2AC" />
          <SiJavascript className="icon" color="#F7DF1E" />
          <SiHtml5 className="icon" color="#E34F26" />
          <SiReact className="icon" color="#61DAFB" />
          <SiCss3 className="icon" color="#1572B6" />
          <SiTailwindcss className="icon" color="#38B2AC" />
          <SiJavascript className="icon" color="#F7DF1E" />
        </div>
        <div aria-hidden className="flex group flex-row gap-10 *:size-15 *:max-sm:size-10 ">
          <SiHtml5 className="icon" color="#E34F26" />
          <SiReact className="icon" color="#61DAFB" />
          <SiCss3 className="icon" color="#1572B6" />
          <SiTailwindcss className="icon" color="#38B2AC" />
          <SiJavascript className="icon" color="#F7DF1E" />
          <SiHtml5 className="icon" color="#E34F26" />
          <SiReact className="icon" color="#61DAFB" />
          <SiCss3 className="icon" color="#1572B6" />
          <SiJavascript className="icon" color="#F7DF1E" />
          <SiTailwindcss className="icon" color="#38B2AC" />
        </div>
      </div>
    </section>
  );
}
export default Skills;
