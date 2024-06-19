// components/MenuSection.tsx

import React from 'react';

const MenuSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Menu Pizza</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">New Dishes </h3>
            <p className="text-gray-700 mb-4">Fresh mozzarella, basil, and our secret tomato sauce.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full uppercase tracking-wide transition duration-300">Order Now</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Pepperoni Passion</h3>
            <p className="text-gray-700 mb-4">Loaded with savory pepperoni and melted cheese.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full uppercase tracking-wide transition duration-300">Order Now</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Veggie Supreme</h3>
            <p className="text-gray-700 mb-4">A garden's bounty of fresh vegetables atop a crispy crust.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full uppercase tracking-wide transition duration-300">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
