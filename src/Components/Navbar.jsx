import logo from "./reminihi.png";
import { useEffect, useState } from "react";
function Navbar() {
  const navitems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isDark, setIsDark] = useState(false);

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
      <div className="w-full hidden justify-around items-center mt-6 mb-4 sm:flex">
        <img src={isDark ? {logo} : "./reminihi-light.png"} alt="not" />
        <ul className="flex justify-center space-x-4">
          {navitems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-primary hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
