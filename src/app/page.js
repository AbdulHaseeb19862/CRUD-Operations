"use client";
import Image from "next/image";
import GetAllProduct from "./components/page.jsx";

export default function Home() {
  return (
    <>
      <h1 className="text-red-800">This is tanstack query</h1>
      <GetAllProduct />
    </>
  );
}
