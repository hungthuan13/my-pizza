// components/Navbar.tsx

import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Tiệm Pizza Tình Yeu</div>
        <ul className="flex space-x-4">
          <li><a href="/landingPage" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Menu</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
