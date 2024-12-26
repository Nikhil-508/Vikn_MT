import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

const StockManagement = ({ products, setProducts }) => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [stockChange, setStockChange] = useState("");

  const selectedProduct = products.find(
    (product) => product.id === parseInt(selectedProductId)
  );

  // Update stockChange when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      setStockChange(selectedProduct.stock);
    } else {
      setStockChange("");
    }
  }, [selectedProduct]);

  const handleStockUpdate = () => {
    if (!selectedProductId || stockChange === "") return;

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === parseInt(selectedProductId)
          ? { ...product, stock: parseInt(stockChange) }
          : product
      )
    );
    setStockChange("");
    setSelectedProductId("");
    toast.success('Stock udpated')
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Stock Management</h2>
      <div className="space-y-4">
        <select
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        {selectedProduct && (
          <div className="text-gray-700">
            <p>
              Current Stock: <strong>{selectedProduct.stock}</strong>
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">New Stock</label>
          <input
            type="number"
            value={stockChange}
            onChange={(e) => setStockChange(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <Toaster position="top-center"/>
        <button
          onClick={handleStockUpdate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default StockManagement;
