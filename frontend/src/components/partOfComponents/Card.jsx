import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (req, res) => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };

  const editProduct = async (productId) => {
    try {
      await axios.update(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="ml-[10px] md:ml-[100px] md:mt-[70px] md:mb-[20px]">
        <h1 className=" font-bold text-xl md:text-[40px]">Hot Food</h1>
      </div>
      <div className="flex justify-center">
        <div className="p-10 md:p-4 grid grid-cols-1 gap-y-[20px] md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {products.map((product, index) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product.id}>
              <img className="rounded-t-lg w-full h-48 sm:h-56 object-center" src={product.url} alt="..." />

              <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <div className="px-4 pb-4 flex justify-between">
                <div className="flex flex-row">
                  <button className="p-2 bg-blue-800 rounded-md hover:bg-blue-400" onClick={() => deleteProduct(product.id)}>
                    <Icon icon="material-symbols:delete" className="hover:text-red-500 text-2xl" />
                  </button>
                  <Link to={`/edit/${product.id}`} className="p-2 bg-blue-800 rounded-md ml-2 hover:bg-blue-400 " onClick={() => editProduct(product.id)}>
                    <Icon icon="material-symbols:edit" className="hover:text-yellow-500 text-2xl" />
                  </Link>
                </div>
                <div>
                  <button className="pt-2 pr-2">
                    <Icon icon="icon-park-solid:like" className="text-2xl hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
