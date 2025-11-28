import { useGetAllProduct } from "@/Hooks/UseGetAllProduct.jsx";
import React from "react";

const GetAllProduct = () => {
  const { data, isLoading, isError } = useGetAllProduct();
  if (isLoading) return <h2>Data is loading</h2>;
  if (isError) return <h2>Error</h2>;
  console.log("Fetching Data", data);
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Getting All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data?.map((product) => {
          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {product.description}
              </p>
              <h3 className="text-xl font-bold text-green-600">
                Rs: {product.price}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetAllProduct;
