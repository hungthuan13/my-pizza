import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FaShoppingCart } from "react-icons/fa";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
}

const ProductDetail: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuantity(Number(event.target.value)); // Convert value to number and update state
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                {pizza.name}
              </h2>
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">
                  <span className="font-semibold">Quantity:</span>{" "}
                  <select
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border border-gray-300 rounded-md px-3 py-1"
                  >
                    {/* Option values for quantity selection */}
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-4">{pizza.description}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Ingredients:</span>{" "}
              {pizza.ingredients.join(", ")}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Price:</span> $
              {pizza.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
