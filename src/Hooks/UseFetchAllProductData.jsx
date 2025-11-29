"use client";

import { fetchAllProductData } from "@/services/ProductServices.jsx";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllProductData = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchAllProductData,
  });
};
