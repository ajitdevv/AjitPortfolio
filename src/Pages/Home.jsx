import ThemeToggle from "../Components/ThemeTogggle";
import Navbar from "../Components/Navbar";
import Starbackground from "../Components/background";
import Herosection from "../Components/Herosection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Project from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Topbutton from "../Components/Topbutton";

function home() {
  return (
    <div className="min-h-screen costum-scroll bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <Starbackground />

      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>
        <Topbutton/>
        <Herosection />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default home;
