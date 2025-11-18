import logo from "./musicwebsite.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="about"
      className=" flex flex-row justify-center gap-[5%] w-full pt-20 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-10 max-sm:pb-10"
    >
      <div className="p-8 h-full w-[40%] text-center max-sm:w-[70%]">
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          className="text-primary bold text-5xl font-bold flex justify-start"
        >
          About&nbsp;<span className="text-primary-foreground"> Me</span>
        </h1>
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
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
          data-aos="fade-right"
          data-aos-offset="200"
          className="text-primary text-lg mt-6 max-w-auto mx-auto"
          style={{ letterSpacing: "0.05rem" }}
        >
          Whether you need a business website, a startup platform, a personal
          portfolio, an e-commerce store, or a hotel website — I specialize in
          designing impactful digital solutions that help businesses grow
          through clean design, fast performance, and user-friendly experiences.
        </p>
        <h3
          data-aos="fade-right"
          data-aos-offset="200"
          className="text-primary text-2xl mt-6 max-w-auto mx-auto"
        >
          I craft modern digital experiences that transform your vision into
          reality.
        </h3>
        <div className="mt-10 flex flex-row justify-around max-sm:flex-col max-sm:items-center max-sm:gap-4 ">
          <a
            className="cosmic-button text-lg"
            href="#contact"
            data-aos="fade-left"
            data-aos-offset="100"
          >
            <button>Contact me</button>
          </a>
          <a
            className="cosmic-button text-lg"
            href=""
            data-aos="fade-right"
            data-aos-offset="100"
            onClick={() => navigate("/Cv")}
          >
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="w-[30%]">
        <img
          src={logo}
          className="w-60 md:w-80 rounded-xl shadow-xl object-cover"
        />
      </div>
    </section>
  );
}
export default About;
