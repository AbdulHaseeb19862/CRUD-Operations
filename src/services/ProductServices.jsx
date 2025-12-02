"use client";
import { BASE_URL } from "@/lib/api.jsx";

// Get All Product Data
// export const getAllProduct = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/products`);
//     const data = await response.json();
//     console.log("Getting all products data", data);
//     return data;
//   } catch (error) {
//     console.log("Error .....", error);
//   }
// };

// Get Single Product
// export const getSingleProduct = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     console.log("Response", response);

//     if (!response.ok) {
//       throw new Error("Failed to fetch single product");
//     }

//     const data = await response.json();
//     console.log("Getting Single Product", data);
//     return data;
//   } catch (error) {
//     console.log("Error ", error.message);
//   }
// };

// Get All Product data
// export const fetchAllProducts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/products`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error ", error);
//   }
// };

// Get single product data

// export const fetchSingleProduct = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     if (!response.ok) {
//       console.log("Failed to fetch single product");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Errors fetch single product", error);
//   }
// };

// Fetch all product data
export const fetchAllProductData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Errors of Fetch all product", error);
  }
};

// Fetch Single Product Data

export const fetchSingleProductData = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      console.log("Failed To Fetching Data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong");
  }
};

// Create Product Data

// export const createProductData = async (createData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(createData),
//     });
//     if (!response.ok) {
//       console.logO("Failed To creating product data");
//     }
//     const data = await response.json();
//     console.log("New Product Data Created", data);
//     return data;
//   } catch (error) {
//     console.log("Error in creating product data", error);
//   }
// };

// create new product data

export const createNewProductData = async (createData) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createData),
    });

    if (!response.ok) {
      console.log("Failed to create new data");
    }
    const data = await response.json();
    console.log("Creating New Product Data", data);
    return data;
  } catch (error) {
    console.log("Error in creating new product data", error);
  }
};

// update product data

export const updateProductData = async ({ id, updateData }) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    console.log("respnse", response);
    if (!response.ok) {
      console.log("Failed to updating data");
    }
    const data = await response.json();
    console.log("Updating data", data);
    return data;
  } catch (error) {
    console.log("Error in updated data", error);
  }
};
