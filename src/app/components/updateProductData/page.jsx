"use client";

import { useUpdateProductData } from "@/Hooks/UseUpdateProductData.jsx";

const UpdateProductData = () => {
  const { mutate, isPending } = useUpdateProductData();

  const handleUpdateData = () => {
    mutate({
      id: 7,
      updateData: {
        title: "this is updated title",
        description: "This is description of updated product data",
      },
    });
  };

  return (
    <>
      <h3>This is Tanstack Query</h3>

      {isPending && <h4>Updating data...</h4>}

      <button onClick={handleUpdateData}>Update Data</button>
    </>
  );
};

export default UpdateProductData;
