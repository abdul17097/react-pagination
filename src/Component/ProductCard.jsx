import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Link className="border group w-[20rem] h-[24rem] bg-white flex flex-col flex-grow-1 shadow-lg rounded-2xl overflow-hidden p-5 ">
      <div className="h-[16rem] border w-full rounded-lg overflow-hidden shadow ">
        <img
          src={product.thumbnail}
          alt=""
          className="h-full w-full group-hover:scale-105 transition-all ease-in-out delay-100"
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <h2 className="font-semibold text-xl capitalize text-ellipsis line-clamp-1">
          {product.title}
        </h2>
        <span className="text-slate-5 00 capitalize">{product.category}</span>
        <div className="w-full flex justify-between items-end">
          <span className="font-bold text-lg"> ${product.price}</span>
          <button className="bg-black text-white w-10 h-10 flex justify-center items-center rounded-full">
            <FaPlus className="text-xl" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
