import { Box } from "@mui/material";
import React from "react";
import Categories from "../components/Categories";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Categories />
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
