import { createContext, useEffect, useState } from "react";
import { food_list } from "../frontend_assets/assets.js";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const currency = "Rs";
    const [cartItems,setCartItems] = useState({});
    const [count, setCount] = useState(0);

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

    const getTotalPrice = () => {
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let priceItem = food_list[item - 1].price * cartItems[item];
                total += priceItem
            }
        }
        console.log(total);
        return total;
    }

    const getCartCount = () => {
        let countItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                countItem += cartItems[item]
            }
        }
        setCount(countItem);
    }

    useEffect(() => {
        getTotalPrice();
        getCartCount();
        console.log(count);
    },[cartItems])

    const values = {
        food_list,
        currency,
        setCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalPrice,
        count,
        
    }

    return (
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;