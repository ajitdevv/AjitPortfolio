import ThemeToggle from "../Components/ThemeTogggle";
import Navbar from "../Components/Navbar";
import Starbackground from "../Components/background";
import Herosection from "../Components/Herosection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Project from "../Components/Projects";
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
      <main>
        <Herosection />
        <About />
        <Skills />
        <Project />
      </main>
      {/* Footer */}
    </div>
  );
}
export default home;
