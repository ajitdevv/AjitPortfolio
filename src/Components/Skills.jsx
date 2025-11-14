import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
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
          <SiHtml5 size={120} className="devv" color="#E34F26" />
          <SiCss3 size={120} className="devv" color="#1572B6" />
          <SiJavascript size={120} className="devv" color="#F7DF1E" />
          <SiReact size={120} className="devv" color="#61DAFB" />
          <SiTailwindcss size={120} className="devv" color="#38B2AC" />
          <SiHtml5 size={120} className="devv" color="#E34F26" />
          <SiCss3 size={120} className="devv" color="#1572B6" />
          <SiJavascript size={120} className="devv" color="#F7DF1E" />
          <SiReact size={120} className="devv" color="#61DAFB" />
          <SiTailwindcss size={120} className="devv" color="#38B2AC" />
        </div>
        <div aria-hidden className="flex group flex-row gap-10">
          <SiHtml5 size={120} className="devv" color="#E34F26" />
          <SiCss3 size={120} className="devv" color="#1572B6" />
          <SiJavascript size={120} className="devv" color="#F7DF1E" />
          <SiReact size={120} className="devv" color="#61DAFB" />
          <SiTailwindcss size={120} className="devv" color="#38B2AC" />
          <SiHtml5 size={120} className="devv" color="#E34F26" />
          <SiCss3 size={120} className="devv" color="#1572B6" />
          <SiJavascript size={120} className="devv" color="#F7DF1E" />
          <SiReact size={120} className="devv" color="#61DAFB" />
          <SiTailwindcss size={120} className="devv" color="#38B2AC" />
        </div>
      </div>
    </section>
  );
}
export default Skills;
