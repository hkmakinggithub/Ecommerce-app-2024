import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping, FaCaretDown } from 'react-icons/fa6' // Updated import
import { FiShoppingBag } from 'react-icons/fi'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({ handleOrderPopup }) => {
  // State to manage hover for Men and Women categories
  const [hoverMen, setHoverMen] = useState(false)
  const [hoverWomen, setHoverWomen] = useState(false)
  const cart = useSelector((state) => state.cart) // Access the cart state
  // Categories for Men and Women
  const menCategories = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Western Wear' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Footwear' },
    { id: 5, name: 'Jeans' },
    { id: 6, name: 'Shirts' },
    { id: 7, name: 'T-Shirts' },
  ]

  const womenCategories = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Western Wear' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Footwear' },
    { id: 5, name: 'Dresses' },
    { id: 6, name: 'Tops' },
    { id: 7, name: 'Ethnic Wear' },
  ]

  return (
    <div className="shadow-md bg-white dark:bg-slate-600 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-yellow-100 py-2">
        <div className="container flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="font-bold text-xl flex items-center gap-1 dark:text-black"
          >
            <FiShoppingBag size="30" />
            BRINED'CLOTH
          </Link>

          {/* Search Bar and Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] dark:bg-white sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}

            <Link to="/cart">
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                ({cart.items.length})
                <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
              </button>
            </Link>

            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {/* Men Category with Hover Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setHoverMen(true)}
            onMouseLeave={() => setHoverMen(false)}
          >
            <div className="flex items-center gap-[2px] py-2 cursor-pointer uppercase">
              Men
              <FaCaretDown className="transition-all duration-200" />
            </div>
            {/* Dropdown for Men */}
            {hoverMen && (
              <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {menCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={category.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-gray-400"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Women Category with Hover Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setHoverWomen(true)}
            onMouseLeave={() => setHoverWomen(false)}
          >
            <div className="flex items-center gap-[2px] py-2 cursor-pointer uppercase">
              Women
              <FaCaretDown className="transition-all duration-200" />
            </div>
            {/* Dropdown for Women */}
            {hoverWomen && (
              <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {womenCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={category.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Other Menu Items */}
          <li>
            <Link
              to="/#"
              className="inline-block px-4 hover:text-blue-400 duration-200 uppercase"
            >
              Kids
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="inline-block px-4 hover:text-primary duration-200 uppercase"
            >
              Beauty
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="inline-block px-4 hover:text-primary duration-200 uppercase"
            >
              Home & Kitchen
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
