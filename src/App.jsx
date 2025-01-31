import { useEffect, useState } from "react";
import { getAllProducts } from "./services/product-services";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
