import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../admin_assets/assets";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { backendURL } = useContext(AppContext);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/order/get-all-order");
      if (data.success) {
        setOrders(data.userOrders);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateOrderStatus = async (e,orderId) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendURL + "/api/order/post-status", { orderId, status: e.target.value });
      if (data.success) {
        toast.success(data.message);
        getOrders();
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        All Orders
      </h2>
      <div className="flex flex-col items-center">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start border border-gray-200"
            >
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
              <div className="flex flex-col flex-grow">
                <p className="text-gray-700">
                  <strong>Items: </strong>
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index < order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="text-gray-800 font-semibold mt-2">
                  Total:{" "}
                  <span className="text-green-600">Rs {order.amount}.00</span>
                </p>
                <p className="text-sm text-gray-600">
                  Items: {order.items.length}
                </p>
                <div className="mt-3">
                  <p className="font-semibold text-gray-900 mb-2">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p className="text-gray-600 text-sm">{order.address.street},</p>
                  <p className="text-gray-600 text-sm">{order.address.city},</p>
                  <p className="text-gray-600 text-sm">
                    {order.address.state} {order.address.zip}
                  </p>
                  <p className="text-gray-700 font-medium mt-1">
                    {order.address.phone}
                  </p>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700">
                    Update Status:
                  </label>
                  <select
                    className="mt-1 block w-full px-3 py-2 border  text-sm border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    onChange={(e) => updateOrderStatus(e,order._id)} 
                    value={order.status}
                  >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
