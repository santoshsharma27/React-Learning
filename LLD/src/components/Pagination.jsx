import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  async function fetchProducts() {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`,
    );
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
    setNoOfPages(data.total / LIMIT);
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="cursor-pointer p-10">
        {currentPage > 0 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "p-4 text-xl " + (pN === currentPage && "font-bold underline")
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
