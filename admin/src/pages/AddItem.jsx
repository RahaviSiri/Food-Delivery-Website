import React, { useContext, useEffect, useState } from "react";
import { assets } from "../admin_assets/assets.js";
import axios from "axios"
import { toast } from "react-toastify"
import { AppContext } from "../context/AppContext.jsx";

const AddItem = () => {

  const { backendURL } = useContext(AppContext)
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const addItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    try {
      const { data } = await axios.post(backendURL + "/api/food/add-food",formData);
      if(data.success){
        console.log(data.message)
        toast.success(data.message)
        setData({
          name:"",
          description:"",
          price:"",
          category:"Salad"
        })
      }else{
        console.log(data.message)
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <div className="m-6 w-full max-w-3xl flex justify-center">
      <div className=" bg-white w-full shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-orange-600 mb-6 text-center">Add New Product</h2>

        <form className="flex flex-col gap-6" onSubmit={addItem}>
          {/* Upload Area */}
          <div className="flex flex-col gap-3">
            <p className="md:text-lg font-medium text-gray-700">Upload Image</p>
            <label htmlFor="image" className="cursor-pointer">
              <img 
                src={image ? URL.createObjectURL(image): assets.upload_area} 
                alt="Upload Area" 
                className="w-32 h-32 object-cover border-2 border-dashed border-orange-400 rounded-md"
              />
            </label>
            <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} hidden required />
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <p className="md:text-lg font-medium text-gray-700">Product Name</p>
            <input 
              className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              type="text" 
              name="name" 
              placeholder="Enter Product Name"
              onChange={onChangeHandler}
              value={data.name}
            />
          </div>

          {/* Product Description */}
          <div className="flex flex-col">
            <p className="md:text-lg font-medium text-gray-700">Product Description</p>
            <textarea
              name="description"
              rows="4"
              placeholder="Enter Product Description"
              className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={onChangeHandler}
              value={data.description}
            />
          </div>

          {/* Product Category */}
          <div className="flex flex-col">
            <p className="md:text-lg font-medium text-gray-700">Product Category</p>
            <select 
              name="category" 
              className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Vege">Pure Vege</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price */}
          <div className="flex flex-col">
            <p className="md:text-lg font-medium text-gray-700">Product Price</p>
            <input 
              type="number" 
              name="price" 
              placeholder="Enter Product Price"
              className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit"
              className="w-full md:w-1/2 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
