import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../frontend_assets/assets';

const MyOrders = () => {
  const { backendURL, token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/order/get-user-order", { headers: { token } });
      if (data.success) {
        setOrders(data.userOrders);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getOrders();
    }
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Orders</h2>
      <div className="flex flex-col items-center">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col gap-2 sm:flex-row items-center sm:items-start">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="w-12 h-12 sm:w-16 sm:h-16 mr-4" />
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
                <p className="text-gray-800 font-semibold mt-1">Total: <span className="text-green-600">Rs {order.amount}.00</span></p>
                <p className="text-sm text-gray-600">Items: {order.items.length}</p>
                <p className="flex items-center text-sm mt-2">
                  <span className="mr-2 text-green-500">&#x25cf;</span>
                  <b className="capitalize">{order.status}</b>
                </p>
                <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition" onClick={getOrders}>
                  Track Order
                </button>
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

export default MyOrders;
