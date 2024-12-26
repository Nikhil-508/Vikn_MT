import React, { useState } from "react";
// import { toast } from "react-toastify";
import { Toaster, toast } from 'sonner';

const ProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [variant, setVariant] = useState("");
  const [subVariant, setSubVariant] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  const handleAddProduct = () => {
    if (!name || !variant || stock === "") {
      setError("Product name, variant, and stock are required!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      stock: parseInt(stock, 10),
      variants: [{ variant, subVariants: subVariant ? [subVariant] : [] }],
    };

    setProducts([...products, newProduct]);
    setName("");
    setVariant("");
    setSubVariant("");
    setStock("");
    setError("");
    toast.success('Product Added successfully')
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Create New Product</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Variant</label>
          <input
            type="text"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sub-Variant</label>
          <input
            type="text"
            value={subVariant}
            onChange={(e) => setSubVariant(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <Toaster position="top-center"/>
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
