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
