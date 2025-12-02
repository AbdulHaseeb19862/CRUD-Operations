"use client";

import { deleteProductData } from "@/services/ProductServices.jsx";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProductData = () => {
  return useMutation({
    mutationFn: (id) => deleteProductData(id),
  });
};
