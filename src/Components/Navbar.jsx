import logo from "./reminihi.png";
import logo2 from "./remini2.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  const navitems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isDark, setIsDark] = useState(false);
  const [ismenuopen, setismenuopen] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <nav>
      <div className="w-full bg-foreground fixed z-100 hidden justify-around items-center p-5 mb-4 sm:flex">
        <img
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="1000"
          className="w-8 h-9"
          src={isDark ? logo : logo2}
          alt="not"
        />
        <ul className="flex justify-center space-x-4">
          {navitems.map((item) => (
            <li
              data-aos="fade-down"
              data-aos-offset="150"
              data-aos-duration="1000"
              key={item.name}
            >
              <a href={item.href} className="text-primary hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        data-aos="fade-down"
        data-aos-offset="150"
        data-aos-duration="1000"
        className="w-full fixed top-0 left-0 flex justify-between px-7 items-center py-4 bg-background z-50 sm:hidden"
      >
        <img
          // className="w-7 h-8 mt-1.5"
           className={isDark ? "w-7 h-8 mt-1.5" : "w-7 h-8 mt-1.5 "}
          src={isDark ? logo : logo2 }
          alt="logo not found"
        />
        <button
          data-aos="fade-down"
          data-aos-offset="150"
          data-aos-duration="1000"
          onClick={() => setismenuopen(!ismenuopen)}
          className="sm:hidden transition-transform mt-1.5 size-8 duration-700 text-primary"
        >
          {ismenuopen ? <X /> : <Menu />}
        </button>
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-screen flex flex-col bg-foreground items-center justify-center space-y-6 transition-all duration-500 z-40 ${
          ismenuopen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navitems.map((item) => (
          <li key={item.name} className="first:not-only-of-type:mt-10 ">
            <a
              onClick={() => setismenuopen(!ismenuopen)}
              href={item.href}
              className="text-primary transition-transform duration-1 hover:underline"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
