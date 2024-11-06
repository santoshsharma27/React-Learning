import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "../Shimmer";

const LIMIT = 12;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${
          currentPage * LIMIT
        }&select=title,price,description,thumbnail,discountPercentage`,
      );
      if (!res.ok)
        throw new Error("Something went wrong with fetching products");
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / LIMIT));
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function prevButtonClickHandler() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0)); // Ensure it doesn't go below 0
  }

  function nextButtonClickHandler() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1)); // Ensure it doesn't exceed total pages
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      {isLoading ? (
        <Shimmer />
      ) : products.length === 0 ? (
        <p className="text-center text-lg font-medium text-gray-700">
          No products available
        </p>
      ) : (
        <div>
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 py-4">
            <button
              className="rounded-md bg-blue-600 px-6 py-2 text-lg text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={prevButtonClickHandler}
              disabled={currentPage === 0} // Disable when on the first page
            >
              {"<"}
            </button>

            {[...Array(totalPages).keys()].map((number) => (
              <button
                className={`rounded-md px-4 py-2 text-lg font-semibold text-gray-700 transition duration-300 ${
                  number === currentPage
                    ? "bg-blue-600 font-bold text-white"
                    : "hover:bg-blue-200"
                }`}
                key={number}
                onClick={() => setCurrentPage(number)}
              >
                {number + 1}
              </button>
            ))}

            <button
              className="rounded-md bg-blue-600 px-6 py-2 text-lg text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={nextButtonClickHandler}
              disabled={currentPage === totalPages - 1} // Disable when on the last page
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pagination;
