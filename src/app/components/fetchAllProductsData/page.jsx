"use client";

import { useFetchAllProductData } from "@/Hooks/UseFetchAllProductData.jsx";

const FetchAllProductsData = () => {
  const { data, isLoading, isError } = useFetchAllProductData();
  if (isLoading) return <h2>Data is Fetching .......</h2>;
  if (isError) return <h2>Error of geting all product data</h2>;

  return (
    <div>
      <h2>Getting All Products Data</h2>
      <div>
        {data?.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchAllProductsData;
