"use client";
import Image from "next/image";
import GetAllProduct from "./components/getAllProduct/page.jsx";
import GetSingleProduct from "./components/getSingleProduct/page.jsx";
import FetchAllProducts from "./components/fetchAllProducts/page.jsx";
import FetchSingleProduct from "./components/fetchSingleProduct/page.jsx";
import FetchAllProductsData from "./components/fetchAllProductsData/page.jsx";
import FetchSingleProductData from "./components/fetchSingleProductData.jsx/page.jsx";
import CreateProductData from "./components/createProductData/page.jsx";
import CreateNewProductData from "./components/createNewProductData/page.jsx";

export default function Home() {
  return (
    <>
      <h1 className="text-red-800">This is tanstack query</h1>
      {/* <GetAllProduct /> */}
      {/* <GetSingleProduct /> */}
      {/* <FetchAllProducts /> */}
      {/* <FetchSingleProduct /> */}
      {/* <FetchAllProductsData /> */}
      {/* <FetchSingleProductData /> */}
      {/* <CreateProductData /> */}
      <CreateNewProductData />
    </>
  );
}
