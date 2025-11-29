"use client";
import { getAllProduct } from "@/services/ProductServices.jsx";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });
};
