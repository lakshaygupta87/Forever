import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/collection', label: 'COLLECTION' },
  { path: '/about', label: 'ABOUT' },
  { path: '/contact', label: 'CONTACT' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext)

  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 ${isActive ? 'text-black font-semibold' : 'text-gray-700'
    }`;

  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium relative z-30">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-6 sm:h-8" />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-6 text-sm">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={linkClass}>
              <p>{item.label}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="Search" className="w-5 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="relative group">
          <Link to='/login'><img src={assets.profile_icon} alt="Profile" className="w-5 cursor-pointer" /></Link>
          <div className="hidden group-hover:block absolute right-0 pt-4 z-40">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
          {getCartCount() > 0 && (
            <p className="absolute right-[-6px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          )}
        </Link>


        {/* Menu Icon for Mobile */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 sm:hidden transform transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col text-gray-700 h-full py-4 shadow-lg">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 px-4 py-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {/* Sidebar Links */}
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setVisible(false)}
              className="py-3 px-6 hover:bg-gray-100 text-sm"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
