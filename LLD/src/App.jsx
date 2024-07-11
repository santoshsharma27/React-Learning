import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Accordion from "./components//Accordion/Accordion";
import ImageSlider from "./components/ImageSlider";
import Error from "./components/Error";
// import Pagination from "./components/pagination/Pagination";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Order from "./components/Order";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

// Lazy Loading
const Pagination = lazy(() => import("./components/pagination/Pagination"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="accordion" element={<Accordion />} />
        <Route path="imageSlider" element={<ImageSlider />} />
        <Route
          path="pagination"
          element={
            <Suspense fallback={<Shimmer />}>
              <Pagination />
            </Suspense>
          }
        />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
