import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Project from "./routes/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
