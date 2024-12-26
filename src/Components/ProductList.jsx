import React from "react";
import { toast, Toaster } from "sonner";

const ProductList = ({ products, setProducts }) => {
  const handleDeleteProduct = (productId) => {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
      toast.success('Product Deleted successfully!')

  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No products available</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p>Stock: {product.stock}</p>
                {product.variants.map((variant, index) => (
                  <div key={index} className="ml-4">
                    <h4>{variant.variant}</h4>
                    <ul className="ml-6 list-disc">
                      {variant.subVariants.map((subVariant, i) => (
                        <li key={i}>{subVariant}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Toaster position="top-center"/>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
