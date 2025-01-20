import { createContext, useEffect, useState } from "react";
import { url } from "../frontend_assets/assets.js";
import { toast } from "react-toastify"
import axios from "axios"

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const currency = "Rs";
    const backendURL = url;
    const [cartItems,setCartItems] = useState({});
    const [count, setCount] = useState(0);
    const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "" );
    const [food_list,setFood_list] = useState([]);

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
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                // Find the matching food item based on the item ID
                const foodItem = food_list.find(food => food._id === item);
                if (foodItem) {
                    total += foodItem.price * cartItems[item];
                }
            }
        }
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

    const getList = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/food/get-food");
            if(data.success){
                setFood_list(data.foods);
            }else{
                toast.error("Error");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getList();
    })

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
        backendURL,
        setToken,
        token
        
    }

    return (
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;