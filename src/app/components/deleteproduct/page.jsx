import { useDeleteProductData } from "@/Hooks/UseDeleteProductData.jsx";
import React from "react";

const DeleteProductData = () => {
  const { mutate, isLoading, isPending, isSuccess, isError } =
    useDeleteProductData();

  if (isLoading) return <h1>Deleting Data is Loading......</h1>;
  if (isPending) return <h1>Deleting is pending</h1>;
  if (isSuccess) return <h1>Data Deleted successfully</h1>;
  if (isError) return <h1>Errors occured</h1>;

  const handleDeleteProduct = () => {
    mutate(7);
  };
  return (
    <>
      <h2>Handle Delete Product Data</h2>
      <button onClick={handleDeleteProduct}>Delete data</button>
    </>
  );
};

export default DeleteProductData;
