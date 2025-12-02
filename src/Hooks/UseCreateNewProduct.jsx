"use client";

import { createNewProductData } from "@/services/ProductServices.jsx";
import { useMutation } from "@tanstack/react-query";

export const useCreateNewProduct = () => {
  return useMutation({
    mutationFn: (createData) => createNewProductData(createData),
  });
};
