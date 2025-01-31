import { useEffect, useState } from "react";
import { getAllProducts } from "./services/product-services";

function App() {
  useEffect(() => {
    getAllProducts().then((data) => console.log(data));
  }, []);

  return (
    <>
      <h2>Hello, world!</h2>
    </>
  );
}

export default App;
