import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';



import { addItem } from '../features/cartSlice';
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Casual Wear',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 29.99,
  },
  {
    id: 2,
    img: Img2,
    title: 'Printed Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 39.99,
  },
  {
    id: 3,
    img: Img3,
    title: 'Women Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 49.99,
  },
  {
    id: 4,
    img: Img3,
    title: 'Formal Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 59.99,
  },
  {
    id: 5,
    img: Img1,
    title: 'Summer Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 34.99,
  },
  {
    id: 6,
    img: Img2,
    title: 'Casual Wear',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 29.99,
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Access the cart state

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  return (
    <div>
      <div className="container ">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
         
          <h1 data-aos="fade-up" className="text-4xl font-bold top-5 ">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl  pt-20  bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              key={data.id}
            >
              {/* image section */}
              <div className="h-[100px] ">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <p className="text-lg font-semibold text-primary mt-2">{data.price}</p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleAddToCart(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>


     
        
      </div>
    </div>
  )
}

export default TopProducts
