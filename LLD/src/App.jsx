import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import Error from "./components/Error";
import Pagination from "./components/Pagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="imageSlider" element={<ImageSlider />} />
        <Route path="pagination" element={<Pagination />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
