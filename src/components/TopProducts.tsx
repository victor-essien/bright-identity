import React from "react";
import { Link } from "react-router-dom";
import TshirtImg from '../assets/topproducts/tshirt.png';
import ToteImg from '../assets/topproducts/tote.png';
import CustoImg from '../assets/topproducts/custo.png';


const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: "$19.99",
    image: TshirtImg,
    customizeLink: "/customize?product=tshirt",
  },
  {
    id: 2,
    name: "Custom Tote Bag",
    price: "$15.99",
    image:ToteImg,
    customizeLink: "/customize?product=tote",
  },
  {
    id: 3,
    name: "Premium Shirt (Photo)",
    price: "$22.99",
    image: CustoImg,
    customizeLink: "/customize?product=premiumshirt",
  },
  {
    id: 4,
    name: "Eco Shirt (Photo)",
    price: "$21.99",
    image: ToteImg,
    customizeLink: "/customize?product=ecoshirt",
  },
];

const TopProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className=" contaiiner mx-auto px-4">
        <div className="mb-10 flex flex-wrap items-center justify-start gap-4 px-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1F2937] mb-10 flex items-center gap-2">
              Featured Products
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-2xl shadow hover:shadow-lg  bg-gray-200 transition p-6 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-contain mb-4 rounded-xl  shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-lg text-orange-500 font-semibold mb-4">
                {product.price}
              </p>
              <Link
                to={product.customizeLink}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-medium transition"
              >
                Customize
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
