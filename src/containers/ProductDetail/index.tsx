import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
}

const ProductDetail: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {pizza.name}
            </h2>
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
