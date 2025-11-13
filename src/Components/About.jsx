function About() {
  return (
    <section id="about">
      <div className="text-cover p-8 h-full text-center">
        <h1 className="text-primary bold text-5xl font-bold flex justify-start">
          About&nbsp;<span className="text-primary-foreground"> Me</span>
        </h1>
        <h2
          className="text-primary text-3xl mt-6 mx-auto max-w-4xl"
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
          className="text-primary text-lg mt-6 max-w-4xl mx-auto"
          style={{ letterSpacing: "0.05rem" }}
        >
          Whether you need a business website, a startup platform, a personal
          portfolio, an e-commerce store, or a hotel website — I specialize in
          designing impactful digital solutions that help businesses grow
          through clean design, fast performance, and user-friendly experiences.
        </p>
        <h3 className="text-primary text-2xl mt-6 max-w-4xl mx-auto">
          I craft modern digital experiences that transform your vision into
          reality.
        </h3>
        <div>
          <a className="cosmic-button" href="#contact"><button>Contact me</button></a>
          <a className="cosmic-button" href=""><button>Download CV</button></a>
        </div>
      </div>
    </section>
  );
}
export default About;
