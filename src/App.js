import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/cart/Cart";
import Home from "./Pages/home/Home";
import Products from "./Pages/products/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
