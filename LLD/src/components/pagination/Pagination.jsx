import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 10;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE; // 0 * 10 = 0
  const end = start + PAGE_SIZE; // 0 + 10 = 10

  async function fetchProducts() {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      if (!res.ok)
        throw new Error("Something went wrong while fetching products");

      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleNext() {
    if (currentPage < noOfPages - 1) setCurrentPage((prev) => prev + 1);
  }

  function handlePrev() {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  }

  if (isLoading) {
    return (
      <h2 className="flex h-screen items-center justify-center text-xl">
        Loading...
      </h2>
    );
  }

  if (error) {
    <p className="text-center text-lg font-medium text-red-500">{error}</p>;
  }

  if (!isLoading && products.length === 0) {
    return (
      <p className="flex h-screen items-center justify-center text-xl">
        No products available
      </p>
    );
  }

  return (
    <div className="min-h-screen">
      <h1 className="mb-6 text-center text-2xl font-extrabold">Pagination</h1>
      <div>
        <div className="mb-8 flex flex-wrap justify-center gap-8">
          {products.slice(start, end).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="fixed right-0 bottom-0 left-0 flex items-center justify-center gap-4 bg-white py-4 shadow-md">
          <button
            className="cursor-pointer rounded-md bg-blue-600 px-4 text-lg text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            {"<"}
          </button>

          {Array.from({ length: noOfPages }).map((_, index) => (
            <button
              className={`cursor-pointer rounded-md px-2 text-lg font-semibold transition duration-300 ${
                index === currentPage
                  ? "bg-blue-600 font-bold text-white"
                  : "text-gray-700 hover:bg-blue-200"
              }`}
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="cursor-pointer rounded-md bg-blue-600 px-4 text-lg text-white shadow-md transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            onClick={handleNext}
            disabled={currentPage === noOfPages - 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
