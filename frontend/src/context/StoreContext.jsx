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

    const addToCart = async (itemId) => {
        try {
            const { data } = await axios.post(backendURL + "/api/cart/add-cart",{itemId},{headers:{token}});
            if(data.success){
                toast.success(data.message);
                getCartItems();
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    const removeFromCart = async (itemId) => {
        try {
            const { data } = await axios.post(backendURL + "/api/cart/remove-cart",{itemId},{headers:{token}});
            if(data.success){
                toast.success(data.message);
                getCartItems();
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getCartItems = async () => {
        try {
            const { data } = await axios.get(backendURL + "/api/cart/get-cart",{headers:{token}});
            if(data.success){
                setCartItems(data.cartData)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
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
        // console.log(count);
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
        token,
        getCartCount,
        
    }

    return (
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;