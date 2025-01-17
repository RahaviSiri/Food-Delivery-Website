import React from 'react'
import { menu_list } from "../frontend_assets/assets.js"

const ExploreMenu = ({ setCategory }) => {
  return (
    <div className='flex flex-col gap-4 mt-8'>
        <h1 className='text-xl md:text-3xl font-semibold text-orange-500 text-center'>Explore Our Menu</h1>
        <p className='text-justify text-sm md:text-md lg:text-base lg:text-center text-gray-600'>At AaRa's Kitchen, our menu offers a delightful range of fresh, flavorful, and healthy tomato-based dishes, from juicy tomatoes in salads and soups to rich sauces and salsas. We prioritize locally sourced, organic ingredients to bring out the best in every dish. Whether you're craving a simple tomato sandwich, a hearty pasta, or a vibrant salad, our menu is designed to satisfy your taste buds while promoting freshness and quality in every bite. Perfect for anyone who loves tomatoes and wholesome food!</p>
        <div className='flex items-center justify-between gap-4 overflow-x-scroll'>
            {
                menu_list.map((item,index) => (
                    <div key={index} className='flex flex-col items-center gap-1' onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                        <img src={item.menu_image} alt="" className='min-w-[80px] transition-transform duration-300 hover:scale-105'/>
                        <p className='text-gray-600'>{item.menu_name}</p>
                    </div>
                ))
            }
        </div>
        <hr className='my-5 h-[2px] border-none bg-gray-300'/>
    </div>
  )
}

export default ExploreMenu