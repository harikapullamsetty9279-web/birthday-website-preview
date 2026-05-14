import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NopePage from "./pages/NopePage";
import Surprise from "./pages/Surprise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/caught-you" element={<NopePage />} />

        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
