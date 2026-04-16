import Navbar from "../Components/Navbar";
import Starbackground from "../Components/background";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Project from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Topbutton from "../Components/Topbutton";
import ScrollProgress from "../Components/ScrollProgress";
import CursorGlow from "../Components/CursorGlow";

function home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Starbackground />
      <Navbar />
      <main>
        <Topbutton />
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default home;
