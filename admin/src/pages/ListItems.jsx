import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { assets } from "../admin_assets/assets";

const ListItems = () => {
  const [list, setList] = useState([]);
  const { backendURL } = useContext(AppContext);

  const fetchList = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/food/get-food");
      if (data.success) {
        setList(data.foods);
      } else {
        toast.error("Error fetching");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const removeFood = async (foodId) => {
    try {
      const { data } = await axios.post(backendURL + "/api/food/remove-food",{foodId});
      if (data.success) {
        toast.success(data.message);
        fetchList();
      } else {
        toast.error("Error fetching");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    list && (
      <div className="m-3 md:m-5">
        <p className="text-gray-600 font-semibold md:text-xl">All food Lists</p>
        <div className="mt-4">
          <div className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.5fr] items-center gap-10 px-6 py-4 border text-gray-600">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className="grid grid-cols-[0.5fr,1fr,1fr,1fr,0.5fr] items-center gap-10 px-6 py-4 border text-gray-500">
              <img src={item.image} alt="" className="rounded-full w-9 h-9 md:w-12 md:h-12"/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rs {item.price}</p>
              <button onClick={() => removeFood(item._id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ListItems;
