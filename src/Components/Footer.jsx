import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-foreground"
        >
          <path d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,213.3C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <footer className="w-full bg-foreground text-primary py-10 mt-0">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h1 className="text-3xl font-bold text-primary">Ajit Dev</h1>
            <p className="text-sm mt-3 text-gray-400 max-w-xs">
              Full Stack Developer – creating modern and creative web
              experiences.
            </p>
            <div className="flex gap-5 mt-4">
              <a href="https://instagram.com" target="_blank">
                <BsInstagram className="w-6 h-6 hover:scale-125 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank">
                <BsGithub className="w-6 h-6 hover:scale-125 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <BsLinkedin className="w-6 h-6 hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <a href="#home" className="text-gray-400 hover:text-primary">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary">
              Contact
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-400">Email: yourname@gmail.com</p>
            <p className="text-gray-400">Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} Ajit Dev — All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
export default Footer;
