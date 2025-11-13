import logo from "./reminihi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className=" flex flex-row justify-around w-full items-center pt-20"
    >
      <div
        data-aos="fade-right" data-aos-duration="3000" 
        className="about-float text-cover p-8 h-full w-[50%] text-center"
      >
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-primary bold text-5xl font-bold flex justify-start"
        >
          About&nbsp;<span className="text-primary-foreground"> Me</span>
        </h1>
        <h2
          className="text-primary text-3xl mt-6 mx-auto max-w-auto"
          style={{ letterSpacing: "0.05rem" }}
        >
          "I’m
          <a
            href="https://www.instagram.com/ajitdevv/"
            target="_blank"
            className="text-primary-foreground "
            style={{ letterSpacing: "0.01rem" }}
          >
            <span> Ajit Dev </span>
          </a>
          , a passionate Web Developer blending code and creativity to build
          modern, responsive, and impactful digital experiences."
        </h2>
        <p
          className="text-primary text-lg mt-6 max-w-auto mx-auto"
          style={{ letterSpacing: "0.05rem" }}
        >
          Whether you need a business website, a startup platform, a personal
          portfolio, an e-commerce store, or a hotel website — I specialize in
          designing impactful digital solutions that help businesses grow
          through clean design, fast performance, and user-friendly experiences.
        </p>
        <h3 className="text-primary text-2xl mt-6 max-w-auto mx-auto">
          I craft modern digital experiences that transform your vision into
          reality.
        </h3>
        <div className="mt-10 flex flex-row justify-around">
          <a className="cosmic-button text-lg" href="#contact">
            <button>Contact me</button>
          </a>
          <a className="cosmic-button text-lg" href="">
            <button>Download CV</button>
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="w-[30%]">
        <img className="flex items-center justify-center" src={logo} alt="" />
      </div>
    </section>
  );
}
export default About;
