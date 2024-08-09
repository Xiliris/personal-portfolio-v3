import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Project from "./routes/Project";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
