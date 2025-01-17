import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodDisplayCart from './FoodDisplayCart';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Filter food items based on category
    const filteredFood = category === "All" ? food_list.slice(0, 10) : food_list.filter(item => item.category === category);

    return (
        <div className='flex flex-col gap-6 mt-5'>
            <h2 className='text-gray-500 text-center text-xl md:text-3xl font-semibold'>
                Top Dishes Near You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredFood.map((item) => (
                        <FoodDisplayCart 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image}
                        />
                    ))                    
                }
            </div>
        </div>
    );
}

export default FoodDisplay;
