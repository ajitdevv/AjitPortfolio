import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import NotFoundPage from "./Pages/Notfound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
