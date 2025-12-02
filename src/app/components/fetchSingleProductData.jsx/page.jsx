"use client";

import { useFetchSingleProductData } from "@/Hooks/UseFetchSingleProductData.jsx";

const FetchSingleProductData = () => {
  const { data, isLoading, isError } = useFetchSingleProductData(8);
  if (isLoading) return <h2>Data is fetching .......</h2>;
  if (isError) return <h2>Error getting single product data</h2>;

  return (
    <div>
      <h2>Getting Single Product Data</h2>
      <img src={data.image} alt="" />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default FetchSingleProductData;
