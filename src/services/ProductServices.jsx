"use client";
import { BASE_URL } from "@/lib/api.jsx";

// Get All Product Data
export const getAllProduct = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    console.log("Getting all products data", data);
    return data;
  } catch (error) {
    console.log("Error .....", error);
  }
};

// export const getSingleProduct = async (id) => {
//   console.log("Id", id);
//   try {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     if (!response.ok) {
//       console.log("Failed to fetch single product data");
//     }
//     const data = await response.json();
//     console.log("Getting Single Product", data);
//     return data;
//   } catch (error) {
//     console.log("Error ", error);
//   }
// };

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    console.log("Response", response);

    if (!response.ok) {
      throw new Error("Failed to fetch single product");
    }

    const data = await response.json();
    console.log("Getting Single Product", data);
    return data;
  } catch (error) {
    console.log("Error ", error.message);
  }
};
