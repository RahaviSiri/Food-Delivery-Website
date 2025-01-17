import { createContext, useEffect, useState } from "react";
import { food_list } from "../frontend_assets/assets.js";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const currency = "Rs";
    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const currentCount = prev[itemId] || 0;
            if (currentCount > 0) {
                return { ...prev, [itemId]: currentCount - 1 };
            }
            return prev; 
        });
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const values = {
        food_list,
        currency,
        setCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        
        
    }

    return (
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;