import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../frontend_assets/assets.js";

const CartPage = () => {
  const { food_list, cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="mx-auto px-4 py-6 max-w-screen-xl">
      <p className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 mb-7">
        Cart Items
      </p>

      {/* Heading Section */}
      {/* <div className="hidden lg:grid lg:grid-cols-6 gap-4 text-gray-600 font-semibold border-b pb-3 mb-4 text-sm sm:text-base">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div> */}

      {/* Cart Items */}
      <div className="space-y-6 mt-4">
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center lg:grid lg:grid-cols-6 gap-4 sm:gap-8 border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {/* Item Image */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full sm:w-24 sm:h-24 object-cover shadow-sm"
                  />
                </div>

                {/* Item Name */}
                <p className="text-center sm:text-left text-base font-medium text-gray-700">
                  {item.name}
                </p>

                {/* Item Price */}
                <p className="text-center sm:text-left text-sm font-semibold text-gray-800">
                  Rs {item.price.toFixed(2)}
                </p>

                {/* Quantity */}
                <p className="text-center sm:text-left text-sm text-gray-700">
                  {cartItems[item._id]}
                </p>

                {/* Total Price */}
                <p className="text-center sm:text-left text-sm text-gray-800 font-semibold">
                  Rs {(item.price * cartItems[item._id]).toFixed(2)}
                </p>

                {/* Remove Button */}
                <div className="flex justify-center sm:justify-start">
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="bg-orange-500 text-white rounded-lg p-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Remove
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Bottom */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
        {/* Cart Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Cart Summary
          </h2>
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-800 font-medium">Rs {0}</p>
            </div>
            <hr />
            {/* Delivery Fee */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="text-gray-800 font-medium">Rs {0}</p>
            </div>
            <hr />
            {/* Total */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-800">Total</p>
              <p className="text-lg font-semibold text-gray-800">Rs {0}</p>
            </div>
          </div>
          {/* Checkout Button */}
          <button className="w-full mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500">
            Proceed to Checkout
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Promo Code
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter your promo code to get discounts on your order.
          </p>
          <input
              type="text"
              placeholder="Promo code"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 mt-3 w-full">
              Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
