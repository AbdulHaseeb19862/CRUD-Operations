// "use client";

// import { useUpdateProductData } from "@/Hooks/UseUpdateProductData.jsx";

// const UpdateProductData = () => {
//   const { mutate, isLoading, isSuccess, isPending, isError } =
//     useUpdateProductData();

//   if (isLoading) return <h1>Data is Loading ....</h1>;
//   if (isSuccess) return <h1>Data is created successfully </h1>;
//   if (isError) return <h1>Error occured</h1>;

//   const handleUpdateData = () => {
//     mutate({
//       id: 7,
//       updateData: {
//         title: "this is updated title",
//         description: "This is description of updated product data",
//       },
//     });
//   };

//   return (
//     <>
//       <h3>This is Tanstack Query</h3>

//       {isPending && <h4>Updating data...</h4>}

//       <button onClick={handleUpdateData}>Update Data</button>
//     </>
//   );
// };

// export default UpdateProductData;
