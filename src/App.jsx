import React, { useState } from "react";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import StockManagement from "./Components/StockManagement";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider


const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 p-4">
          <Toaster position="top-center" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/add-product"
              element={<ProductForm products={products} setProducts={setProducts} />}
            />
            <Route
              path="/product-list"
              element={<ProductList products={products} setProducts={setProducts} />}
            />
            <Route
              path="/update-stock"
              element={<StockManagement products={products} setProducts={setProducts} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
