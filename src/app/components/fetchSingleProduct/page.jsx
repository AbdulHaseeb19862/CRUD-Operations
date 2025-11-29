// "use client";

// import { useFetchSingleProduct } from "@/Hooks/UseFetchSingleProduct.jsx";
// import React from "react";

// const FetchSingleProduct = () => {
//   const { data, isError, isLoading } = useFetchSingleProduct(5);
//   if (isLoading) return <h2>Data is Loading ......</h2>;
//   if (isError) return <h2>Error in fetching data</h2>;
//   console.log("Fetch data ", data);

//   return (
//     <div>
//       <h2>Getting Single Product</h2>
//       <img src={data.image} alt="" />
//       <h3>{data.title}</h3>
//       <p>{data.description}</p>
//     </div>
//   );
// };

// export default FetchSingleProduct;
