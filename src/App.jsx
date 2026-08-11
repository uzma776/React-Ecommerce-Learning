/** @format */
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element = {<ProductDetail/>}></Route>
      </Routes>
    </>
  );
}

export default App;
