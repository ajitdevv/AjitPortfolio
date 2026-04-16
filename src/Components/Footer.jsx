import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Heart } from "lucide-react";
import { useScrollReveal } from "../hooks/useAnimations";

function Footer() {
  const [footerRef, footerVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className="relative mt-20 px-4 pb-8">
      {/* Floating glass blob */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

      {/* Main glass footer card */}
      <div
        className={`max-w-5xl mx-auto glass-strong rounded-3xl p-6 md:p-10 transition-all duration-1000 ${
          footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {/* Brand */}
          <div className="flex-1 text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Ajeet<span className="text-primary-foreground">.</span>
            </h1>
            <p className="text-primary/50 text-sm mt-3 max-w-xs">
              Frontend developer crafting modern, creative, and performant web experiences.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: BsInstagram, href: "https://www.instagram.com/ajitdevv/", color: "hover:text-pink-500" },
                { Icon: BsGithub, href: "https://github.com/ajitdevv", color: "hover:text-primary-foreground" },
                { Icon: BsLinkedin, href: "https://www.linkedin.com/in/ajeet-dev-947287330/", color: "hover:text-blue-500" },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className={`p-2.5 rounded-xl glass-subtle text-primary/60 ${color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h2 className="text-primary font-semibold text-sm mb-3">Quick Links</h2>
            <div className="flex flex-col gap-1.5">
              {["Home", "About", "Skills", "Projects", "Contact"].map((name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="text-primary/40 text-sm hover:text-primary-foreground transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h2 className="text-primary font-semibold text-sm mb-3">Contact</h2>
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:ajeetbairwa57@gmail.com"
                className="text-primary/40 text-sm hover:text-primary-foreground transition-colors duration-300"
              >
                ajeetbairwa57@gmail.com
              </a>
              <a
                href="tel:+918058339867"
                className="text-primary/40 text-sm hover:text-primary-foreground transition-colors duration-300"
              >
                +91 80583 39867
              </a>
              <p className="text-primary/40 text-sm">India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-primary/10 mt-8 mb-4" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-primary/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Ajeet Bairwa. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
