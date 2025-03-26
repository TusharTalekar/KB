import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import React from "react";
import "./ItemPage.css";

const ItemPage = ({products}) => {
  const { categoryName,productName } = useParams();
  const a = products[categoryName] || {};
  const itemDetail = a[productName] || {};


  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-300 p-6">
    <div className="bg-white p-8 rounded-2xl shadow-xl flex gap-8 max-w-5xl w-full">
      <img
        src={`${itemDetail.image}`} // Replace with actual book image
        alt="Book Cover"
        className="w-48 h-72 object-cover rounded-lg border border-gray-300"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{itemDetail.name}</h2>
          <p className="text-green-600 text-2xl font-semibold mt-2">{itemDetail.price}</p>
          <p className="text-gray-700 mt-3">
            Book Description: In this meticulously crafted guide, Physics Handwritten
            Notes offers a concise yet comprehensive overview of the essential
            principles of physics. This book is your key to mastering the subject.
          </p>
          <p className="mt-4 font-semibold text-gray-900">Product Quality</p>
          <div className="flex items-center gap-1 text-xl">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < 3 ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        </div>
        <button className="mt-6 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg border border-black hover:bg-yellow-600 text-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
  );
};

export default ItemPage;