import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
    const { getTotalPrice } = useContext(StoreContext);

    return (
        <div className="container mx-auto p-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Delivery Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Zip Code"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Right */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Cart Summary</h2>
                    <div className="space-y-4">
                        {/* Subtotal */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="text-gray-800 font-medium">Rs {getTotalPrice()}</p>
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
                            <p className="text-lg font-semibold text-gray-800">Rs {getTotalPrice()}</p>
                        </div>
                        <button
                            type="button"
                            className="w-full mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PlaceOrder;
