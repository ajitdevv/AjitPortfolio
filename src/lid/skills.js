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
} from "react-icons/si";
import { MdPsychology, MdPhoneIphone, MdDesignServices } from "react-icons/md";
import { RiPlugLine } from "react-icons/ri";
import { VscVscode, VscDebugAlt } from "react-icons/vsc";

export const skills = [
  { id: 1, title: "HTML", Icon: SiHtml5, color: "#E34F26", experience: "3+ Year", type: "Frontend" },
  { id: 2, title: "CSS", Icon: SiCss3, color: "#1572B6", experience: "3+ Year", type: "Frontend" },
  { id: 3, title: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", experience: "2+ Year", type: "Frontend" },
  { id: 4, title: "React", Icon: SiReact, color: "#61DAFB", experience: "2+ Year", type: "Frontend" },
  { id: 7, title: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC", experience: "1.5+ Year", type: "Frontend" },
  { id: 8, title: "Git", Icon: SiGit, color: "#F1502F", experience: "1+ Year", type: "Tools" },
  { id: 9, title: "Github", Icon: SiGithub, color: "#181717", experience: "1+ Year", type: "Tools" },
  { id: 10, title: "Vercel", Icon: SiVercel, color: "#000000", experience: "1+ Year", type: "Tools" },
  { id: 11, title: "Figma", Icon: SiFigma, color: "#F24E1E", experience: "1.5+ Year", type: "Tools" },
  { id: 12, title: "ChatGPT", Icon: SiOpenai, color: "#10A37F", experience: "3+ Year", type: "Tools" },
  { id: 13, title: "VS Code", Icon: VscVscode, color: "#007ACC", experience: "3+ Year", type: "Tools" },
  { id: 14, title: "Node.js", Icon: SiNodedotjs, color: "#68A063", experience: "Fresher", type: "Backend" },
  { id: 15, title: "Express.js", Icon: SiExpress, color: "#000000", experience: "Fresher", type: "Backend" },
  { id: 16, title: "MongoDB", Icon: SiMongodb, color: "#47A248", experience: "Fresher", type: "Backend" },
  { id: 17, title: "MySQL", Icon: SiMysql, color: "#4479A1", experience: "Fresher", type: "Backend" },
  { id: 18, title: "Problem Solving", Icon: MdPsychology, color: "#4A90E2", experience: "Strong", type: "Extra" },
  { id: 19, title: "API Handling", Icon: RiPlugLine, color: "#264653", experience: "1+ Year", type: "Extra" },
  { id: 20, title: "Responsive Design", Icon: MdPhoneIphone, color: "#2A9D8F", experience: "Expert", type: "Extra" },
  { id: 21, title: "UI/UX Sense", Icon: MdDesignServices, color: "#E9C46A", experience: "Strong", type: "Extra" },
  { id: 22, title: "Debugging", Icon: VscDebugAlt, color: "#E63946", experience: "Strong", type: "Extra" },
];

export const categories = ["All", "Frontend", "Backend", "Tools", "Extra"];

export const marqueeIcons = [
  { Icon: SiHtml5, color: "#E34F26", name: "HTML" },
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiCss3, color: "#1572B6", name: "CSS" },
  { Icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JS" },
  { Icon: SiNodedotjs, color: "#68A063", name: "Node" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiGit, color: "#F1502F", name: "Git" },
  { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { Icon: VscVscode, color: "#007ACC", name: "VS Code" },
];
