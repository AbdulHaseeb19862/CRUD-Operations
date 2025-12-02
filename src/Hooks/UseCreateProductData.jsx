"use client";
import { createProductData } from "@/services/ProductServices.jsx";
import { useMutation } from "@tanstack/react-query";

export const useCreateProductData = () => {
  return useMutation({
    mutationFn: (createData) => createProductData(createData),
  });
};
