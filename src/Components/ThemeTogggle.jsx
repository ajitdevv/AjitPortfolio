import { Moon, Sun } from "lucide-react";
import { useState } from "react";
function ThemeToggle() {
  const [isdarkmode, setisdarkmode] = useState(true);
  return (
    <button>
      {isdarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
}
export default ThemeToggle;
