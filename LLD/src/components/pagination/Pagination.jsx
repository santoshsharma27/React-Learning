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
        console.log(data);
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / LIMIT));
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [currentPage]);

  function prevButtonClickHandler() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function nextButtonClickHandler() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="pt-5">
      {isLoading && <Shimmer />}
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="cursor-pointer p-10 text-center">
        {currentPage > 0 && (
          <button className="p-4 text-xl" onClick={prevButtonClickHandler}>
            {"<"}
          </button>
        )}
        {[...Array(totalPages).keys()].map((number) => (
          <span
            className={
              "p-4 text-xl" + (number === currentPage && "font-bold underline")
            }
            key={number}
            onClick={() => {
              setCurrentPage(number);
            }}
          >
            {number + 1}
          </span>
        ))}
        {currentPage < totalPages - 1 && (
          <button className="p-4 text-xl" onClick={nextButtonClickHandler}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
