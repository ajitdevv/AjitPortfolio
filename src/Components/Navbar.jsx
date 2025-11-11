import logo from "./reminihi.png";
import logo2 from "./remini2.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
function Navbar() {
  const navitems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
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
      <div className="w-full fixed hidden justify-around items-center mt-5 mb-4 sm:flex">
        <img className="size-8" src={isDark ? logo : logo2} alt="not" />
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
      <div
        className={
          "w-full fixed flex justify-between items-center mt-5 mb-4 sm:hidden"
        }
      >
        <img
          className="size-8"
          src={isDark ? logo : logo2}
          alt="logo not found"
        />
        <button
          onClick={() => setismenuopen(!ismenuopen)}
          className="flex sm:hidden text-primary"
        >
          {ismenuopen ? <X /> : <Menu />}
        </button>
      </div>
      <ul
        className={`flex flex-col justify-center space-y-4 ${
          ismenuopen ? "block" : "hidden"
        }`}
      >
        {navitems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="text-primary hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
