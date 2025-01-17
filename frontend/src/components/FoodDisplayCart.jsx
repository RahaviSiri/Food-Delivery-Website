import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { assets } from "../frontend_assets/assets";

const FoodDisplayCart = ({ id, name, description, price, image }) => {

  const { currency,cartItems,addToCart,removeFromCart, } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg shadow-orange-100 overflow-hidden" key={id}>
      <img
        src={image}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-60 object-cover"
      />
      <div className="px-4 py-3">
        {!cartItems[id]? (
          <img
            src={assets.add_icon_white}
            className="w-10 mb-4"
            alt=""
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="flex gap-3 items-center mb-4">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-lg md:text-xl font-medium">
            {name}
          </p>
          <img src={assets.rating_starts} alt="Rating" className="w-12 h-4" />
        </div>
        <p className="text-xs md:text-sm text-gray-600 mt-2">
          {description}
        </p>
        <p className="mt-3 font-semibold text-lg text-orange-600">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};

export default FoodDisplayCart;
