import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import NotFoundPage from "./Pages/Notfound.jsx";
import Cv from "./Components/Cv.jsx";
import About from "./Components/About.jsx";
import ProjectDetile from "./Pages/ProjectDetail.jsx";
import AllSkills from "./Pages/AllSkills.jsx";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/cv" element={<Cv />} />
      <Route path="skills" element={<AllSkills />} />
      <Route path="/project/:id" element={<ProjectDetile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
