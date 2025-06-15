import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-800 shadow-md">
        <nav className="flex items-center justify-around p-4">
          <div className="flex gap-12">
            <Link
              to="/"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Cart
            </Link>
            <Link
              to="/order"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Order
            </Link>
            <Link
              to="/accordion"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Accordion
            </Link>
            <Link
              to="/imageSlider"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              ImageSlider
            </Link>
            <Link
              to="/search"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Search
            </Link>
            <Link
              to="/traffic"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Traffic
            </Link>
            <Link
              to="/textExpander"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Expander
            </Link>
            <Link
              to="/pagination"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Pagination
            </Link>
            <Link
              to="/drag"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              Drag&Drop
            </Link>
            <Link
              to="/USBANK"
              className="text-white transition duration-300 hover:text-gray-300"
            >
              USBANK
            </Link>
          </div>
        </nav>
      </div>

      <div className="mb-16"></div>
    </>
  );
}

export default NavBar;
