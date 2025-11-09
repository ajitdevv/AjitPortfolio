import { Moon, Sun } from "lucide-react";
import { useState } from "react";
function ThemeToggle() {
  const [isdarkmode, setisdarkmode] = useState(true);
  return <button> {isdarkmode ? <Sun /> : <Moon />}</button>;
}
export default ThemeToggle;
