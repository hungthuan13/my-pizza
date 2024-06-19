// components/Navbar.tsx

import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-xl font-bold">Tiệm Pizza Tình Yeu</div>
        </Link>
        <ul className="flex space-x-4 items-center">
          <BiUserCircle />
          <li>
            <a className="hover:text-gray-300">Thành viên</a>
          </li>
          <MdApartment />
          <li>
            <a className="hover:text-gray-300">Theo dõi đơn hàng</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
