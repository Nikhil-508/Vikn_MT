import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Assuming you have an AuthContext for user state management

const Home = () => {
  const { user, logout } = useAuth(); 
  console.log(user,"haiii")
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Product Management</h1>

      {/* Display logged-in user's username */}
      {user && (
        <div className="mb-4 text-lg text-gray-700">
          <span>Welcome, {user}</span>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}

      <div className="space-y-8 gap-4 justify-center mx-auto">
        <button
          onClick={() => navigate("/add-product")}
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Add a Product
        </button>
        <button
          onClick={() => navigate("/product-list")}
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          Product List
        </button>
        <button
          onClick={() => navigate("/update-stock")}
          className="bg-yellow-600 text-white px-6 py-3 rounded shadow hover:bg-yellow-700 transition"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Home;
