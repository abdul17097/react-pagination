import React, { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setTotalProducts(data.limit);
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNums = new Array(totalPages).fill();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentPage);
  return (
    <div className="mx-10 my-10">
      <div className="flex flex-wrap gap-5 justify-around">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-5">
        <ul className="flex justify-center my-10 gap-2 items-center">
          <li>
            {currentPage > 1 && (
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage > 1 ? currentPage - 1 : currentPage
                  )
                }
                className="hover:bg-blue-500 hover:text-white border px-4 py-1 rounded"
              >
                Previous
              </button>
            )}
          </li>
          {pageNums.map((_, index) => (
            <li key={index} className="mx-1">
              <button
                className={`px-3 py-1 rounded-full ${
                  currentPage === index + 1 ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handlePage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            {currentPage !== totalPages && (
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage < totalPages ? currentPage + 1 : currentPage
                  )
                }
                className="hover:bg-blue-500 hover:text-white border px-4 py-1 rounded"
              >
                Next
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
