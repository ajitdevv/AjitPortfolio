import ThemeToggle from "../Components/ThemeTogggle";
import Navbar from "../Components/Navbar";
import Starbackground from "../Components/background";
function home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <Starbackground />

      {/* Navbar */}
      <Navbar />
      {/* Main content */}

      {/* Footer */}
    </div>
  );
}
export default home;
