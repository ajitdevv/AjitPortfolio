import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function ThemeToggle() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isdarkmode, setisdarkmode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setisdarkmode(true);
    } else {
      document.documentElement.classList.remove("dark");
      false;
    }
  }, []);

  const toggleTheme = () => {
    if (isdarkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setisdarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setisdarkmode(true);
    }
  };
  return (
    <button
     
              data-aos="fade-left"
              data-aos-offset="150"
              data-aos-duration="1000"
 onClick={toggleTheme} className="fixed top-4.5 right-18.5 z-200 p-2 rounded-full transition-colors duration-700 ease-in-out focus: outline-hidden hover:scale-110">
      {isdarkmode ? (
        <Sun className="h-6 w-6 text-[#d352da] t transition-transform duration-700 ease-in-out " />
      ) : (
        <Moon className="h-6 w-6 text-[#ffd700] transition-transform duration-700 ease-in-out " />
      )}
    </button>
  );
}
// export default ThemeToggle;
