import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {
    // Context values
    const { getTotalPrice, cartItems, backendURL, token, food_list, count } =
        useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
    });

    // Handle input changes
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo['quantity'] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        });
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalPrice() + 200,
        };
        console.log(orderData.items.itemInfo);

        const response = await axios.post(
            backendURL + "/api/order/proceed-pay",
            orderData,
            { headers: { token } }
        );
        
        const { data: responseData } = response;
        if (responseData.success) {
            const { session_url } = responseData;
            console.log(session_url);
            window.location.replace(session_url);
        } else {
            toast.error("Error");
        }
        
    };

    const navigate = useNavigate();
    useEffect(() => {
        if(!token){
            navigate('/')
        } else if (count === 0){
            navigate('/');
        }
    },[token])

    return (
        <div className="container mx-auto p-4">
            <form
                onSubmit={placeOrder}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {/* Left */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">
                        Delivery Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            onChange={onChangeHandler}
                            placeholder="First Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            required
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            onChange={onChangeHandler}
                            placeholder="Last Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        required
                        value={data.email}
                        onChange={onChangeHandler}
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="street"
                        required
                        value={data.street}
                        onChange={onChangeHandler}
                        placeholder="Street Address"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="city"
                            value={data.city}
                            required
                            onChange={onChangeHandler}
                            placeholder="City"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="state"
                            value={data.state}
                            required
                            onChange={onChangeHandler}
                            placeholder="State"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="zip"
                            value={data.zip}
                            required
                            onChange={onChangeHandler}
                            placeholder="Zip Code"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="country"
                            value={data.country}
                            required
                            onChange={onChangeHandler}
                            placeholder="Country"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        required
                        onChange={onChangeHandler}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Right */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">
                        Cart Summary
                    </h2>
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
                            <p className="text-gray-800 font-medium">
                                Rs {count > 0 ? 200 : 0}
                            </p>
                        </div>
                        <hr />
                        {/* Total */}
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-800">Total</p>
                            <p className="text-lg font-semibold text-gray-800">
                                Rs {count > 0 ? getTotalPrice() + 200 : getTotalPrice()}
                            </p>
                        </div>
                        <button
                            type="submit"
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
