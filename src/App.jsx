import { useEffect, useState } from "react";
import { getAllProducts } from "./services/product-services";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
