import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import NavBar from "./components/NavBar/NavBar";
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartPage from "./pages/CartPage/CartPage";
import CarouselPage from "./pages/CarouselPage/CarouselPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ProductsContextProvider>
          <Routes>
            <Route path="/" element={<CarouselPage /> } />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />}

             />
          </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
