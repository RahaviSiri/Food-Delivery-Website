import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const navigate = useNavigate();

    // console.log(success,orderId);
    const { backendURL } = useContext(StoreContext);

    const verify = async () => {
        try {
            const { data } = await axios.post(backendURL + "/api/order/verify-order",{success,orderId});
            if(data.success){
                navigate("/my-orders")
            }else{
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        verify();
    },[])

    return (
        <div className='grid min-h-[60vh]'>
            {/* Spinner */}
            <div className='w-[100px] h-[100px] border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin place-self-center'></div>

        </div>
    )
}

export default Verify