import { useEffect, useState } from "react";
// import { getAllProducts } from "./services/product-services";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Landing Page</h1>
              </>
            }
          />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
