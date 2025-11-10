import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
// import { cn } from "@/lid/utils";
function ThemeToggle() {
  const [isdarkmode, setisdarkmode] = useState(true);

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
      onClick={toggleTheme} className="fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-700 ease-in-out focus:outline-hidden hover:scale-110">
      {isdarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-700 ease-in-out " />
      ) : (
        <Moon className="h-6 w-6 text-indigo-500 transition-transform duration-700 ease-in-out " />
      )}
    </button>
  );
}
export default ThemeToggle;
