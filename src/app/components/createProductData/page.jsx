"use client";

import { useCreateProductData } from "@/Hooks/UseCreateProductData.jsx";

const CreateProductData = () => {
  const { mutate, isLoading, isError, isPending, isSuccess } =
    useCreateProductData();
  if (isLoading) return <h1>Data is loading ......</h1>;
  if (isError) return <h1>Something went wrong</h1>;
  if (isSuccess) return <h1>Creating Data Successfully</h1>;

  const handleCreateProductData = () => {
    mutate({
      title: "I am new product title",
      descritpion: "I am new product data description",
      price: "500",
    });
  };
  return (
    <>
      <h1>Creating Product Data</h1>
      <button onClick={handleCreateProductData}>Product Data</button>
    </>
  );
};

export default CreateProductData;
