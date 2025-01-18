import React from 'react'
import { assets } from '../admin_assets/assets'
import { NavLink } from "react-router-dom"

const SideBar = () => {

  return (
    <div className="bg-orange-600 text-white min-h-screen md:w-64 p-4">
      <div className="space-y-4 mt-5">
        <NavLink 
          to="/add-item" 
          className={({ isActive }) => `flex flex-col md:flex-row items-center gap-3 hover:bg-orange-500 p-2 rounded cursor-pointer ${isActive ? " border-r-4 border-white" : ""}`}
        >
          <img src={assets.add_icon} alt="Add Item" className="w-5 h-5 md:w-6 md:h-6" />
          <p className='md:text-lg'>Add Item</p>
        </NavLink>
        <NavLink 
          to="/list-item" 
          className={({ isActive }) => `flex flex-col md:flex-row items-center gap-3 hover:bg-orange-500 p-2 rounded cursor-pointer ${isActive ? "border-r-4 border-white" : ""}`}
        >
          <img src={assets.order_icon} alt="List Items" className="w-5 h-5 md:w-6 md:h-6" />
          <p className='md:text-lg'>List Items</p>
        </NavLink>
        <NavLink 
          to="/order" 
          className={({ isActive }) => `flex flex-col md:flex-row items-center gap-3 hover:bg-orange-500 p-2 rounded cursor-pointer ${isActive ? "border-r-4 border-white" : ""}`}
        >
          <img src={assets.order_icon} alt="Orders" className="w-5 h-5 md:w-6 md:h-6" />
          <p className='md:text-lg'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar;
