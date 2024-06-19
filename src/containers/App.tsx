import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing";
import AdminTable from "./AdminTable";
import ProductDetail from "./ProductDetail";

const App = () => {
  const mockPizzaData = {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    price: 12.99,
    imageUrl: "/image1.jpg",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil"],
  };

  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/admin" element={<AdminTable />} />
        <Route
          path="/product-detail"
          element={<ProductDetail pizza={mockPizzaData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
