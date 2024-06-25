import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const LIMIT = 5;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

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
        setNoOfPages(data.total / LIMIT);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {isLoading && <Shimmer />}
      </div>
      <div className="cursor-pointer p-10 text-center">
        {currentPage > 0 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages.length).keys()].map((pN) => (
          <span
            className={
              "p-4 text-xl" + (pN === currentPage && "font-bold underline")
            }
            key={pN}
            onClick={() => {
              setCurrentPage(pN);
            }}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
}
export default Pagination;
