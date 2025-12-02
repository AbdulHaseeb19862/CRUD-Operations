"use client";
import { updateProductData } from "@/services/ProductServices.jsx";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProductData = () => {
  return useMutation({
    mutationFn: (id, updateData) => updateProductData(id, updateData),
  });
};
