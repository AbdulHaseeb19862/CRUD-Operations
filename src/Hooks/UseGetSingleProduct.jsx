"use client";

import { getSingleProduct } from "@/services/ProductServices.jsx";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleProduct = (id) => {
  console.log("Id", id);
  return useQuery({
    queryKey: ["product,id"],
    queryFn: () => getSingleProduct(id),
  });
};
