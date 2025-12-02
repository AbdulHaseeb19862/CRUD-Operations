"use client";

import { fetchSingleProductData } from "@/services/ProductServices.jsx";
import { useQuery } from "@tanstack/react-query";

export const useFetchSingleProductData = (id) => {
  return useQuery({
    queryKey: ["product,id"],
    queryFn: () => fetchSingleProductData(id),
  });
};
