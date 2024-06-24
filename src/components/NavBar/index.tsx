import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdApartment } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  // Function to toggle popup visibility and navigate to '/orders'
  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };

  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <Link to="/" className="text-xl font-bold">
        Tiệm Pizza Tình Yêu
      </Link>
      <ul className="flex space-x-4 items-center">
        <li>
          <BiUserCircle className="text-2xl cursor-pointer hover:text-gray-300" />
        </li>
        <li>
          <Link to="/member" className="hover:text-gray-300">
            Thành viên
          </Link>
        </li>
        <li>
          <div className="relative">
            <MdApartment
              className="text-2xl cursor-pointer hover:text-gray-300"
              onClick={togglePopup}
            />
            {showPopup && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">
                    Đơn hàng của bạn
                  </h2>
                  <table className="w-full mb-4">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Mã đơn hàng</th>
                        <th className="text-left py-2">Ngày đặt hàng</th>
                        <th className="text-left py-2">Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">DH12345</td>
                        <td className="py-2">2024-06-24</td>
                        <td className="py-2">$25.00</td>
                      </tr>
                      {/* Add more rows as per your data */}
                    </tbody>
                  </table>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                      togglePopup();
                      navigate("/cart");
                    }}
                  >
                    Xem thêm
                  </button>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
