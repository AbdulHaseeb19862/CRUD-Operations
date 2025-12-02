"use client";

import { useCreateNewProduct } from "@/Hooks/UseCreateNewProduct.jsx";

const CreateNewProductData = () => {
  const { mutate, isLoading, isPending, isError, isSuccess } =
    useCreateNewProduct();
  if (isLoading) return <h1>Creating Product data is Loading.....</h1>;
  if (isPending) return <h1>Creating Product data is Pending.....</h1>;
  if (isError) return <h1>Error in creating new product data</h1>;
  if (isSuccess) return <h1>Product Data Creating Successfully </h1>;

  const handleCreateData = () => {
    mutate({
      title: "Creating new product data title",
      description: "This is description of new product data description",
      price: 500,
    });
  };
  return (
    <>
      <h2>Creating New Product Data</h2>
      <button onClick={handleCreateData}>Create new product data</button>
    </>
  );
};

export default CreateNewProductData;
