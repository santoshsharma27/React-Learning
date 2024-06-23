import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Accordion from "./components/Accordion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
