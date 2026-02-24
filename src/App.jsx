import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import NotFoundPage from "./Pages/Notfound.jsx";
import Cv from "./Components/Cv.jsx";
import About from "./Components/About.jsx";
import ProjectDetile from "./Components/ProjectDetile.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
           <Route path="about" element={<About />} />
          <Route path="about/cv" element={<Cv />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/project/:id" element={<ProjectDetile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
