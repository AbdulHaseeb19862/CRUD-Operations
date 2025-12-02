// "use client";

// import { useFetchAllProducts } from "@/Hooks/UseFetchAllProducts.jsx";

// const FetchAllProducts = () => {
//   const { data, isLoading, isError } = useFetchAllProducts();
//   if (isLoading) return <h3>Data is Loading.....</h3>;
//   if (isError) return <h3>Error of Getting All Products</h3>;

//   return (
//     <div>
//       <h2>Getting All Products</h2>
//       <div>
//         {data?.map((product) => {
//           return (
//             <div>
//               <img src={product.image} alt="" />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FetchAllProducts;
