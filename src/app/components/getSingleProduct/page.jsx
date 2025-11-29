// "use client";
// import { useGetSingleProduct } from "@/Hooks/UseGetSingleProduct.jsx";
// import React from "react";

// const GetSingleProduct = () => {
//   const { data, isError, isLoading } = useGetSingleProduct(4);
//   if (isLoading) return <h2>Data is Loading ......</h2>;
//   if (isError) return <h2>Error Getting Single Product</h2>;
//   console.log("Getting single product", data);

//   return (
//     <div>
//       <h2>Getting Single Product</h2>
//       <img src={data.image} alt="" />
//       <h2>{data.title}</h2>
//       <p>{data.description}</p>
//     </div>
//   );
// };

// export default GetSingleProduct;
