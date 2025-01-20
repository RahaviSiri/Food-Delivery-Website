import React, { useContext, useState } from "react";
import { assets } from "../frontend_assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";

const NavBar = () => {
    const { count, token, setToken } = useContext(StoreContext);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        setToken(false);
        navigate('/');
    }

    return (
        <div className="py-10 flex justify-between items-center">
            {/* Logo */}
            <img
                src={assets.logo}
                alt="Company Logo"
                className="w-20 sm:w-32 lg:w-[150px]"
            />

            {/* Navigation Links */}
            <ul className="gap-5 text-gray-600 list-none hidden lg:flex">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : undefined
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : undefined
                        }
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : undefined
                        }
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-orange-600 font-bold" : undefined
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-0 lg:gap-6">
                {/* Search Icon */}
                <img
                    src={assets.search_icon}
                    alt="Search Icon"
                    className="hidden lg:block cursor-pointer"
                />

                {/* Basket Section */}
                <div className="relative hidden lg:block ">
                    <img
                        src={assets.basket_icon}
                        alt="Basket Icon"
                        className="cursor-pointer"
                        onClick={() => navigate("/cart")}
                    />
                    {/* Cart Item Count */}
                    <div className="absolute top-[-5px] right-[-5px] bg-orange-400 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                        {count}
                    </div>
                </div>

                {/* Profile Dropdown */}
                {token ? (
                    <div className="relative group flex items-center cursor-pointer mr-2 sm:mr-3">
                    <img
                        src={assets.profile_icon}
                        alt="Profile Icon"
                        className="w-4 md:w-6 rounded-full"
                    />
                    <div className="absolute right-0 top-full hidden group-hover:block bg-stone-100 rounded shadow-md p-3 sm:p-4 w-24 md:w-48 z-20">
                        <div className='rounded flex flex-col gap-2'>
                            <p 
                                className="hover:text-black cursor-pointer text-sm sm:text-base" 
                                onClick={() => navigate("/place-order")}
                            >
                                Orders
                            </p>
                            <p 
                                className="hover:text-black cursor-pointer text-sm sm:text-base" 
                                onClick={Logout}
                            >
                                Logout
                            </p>
                        </div>
                    </div>
                </div>                   
                ) : (
                    <button
                        className="hidden lg:block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-all"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}

                {/* For Mobile */}
                <img
                    onClick={() => setShowMenu(true)}
                    className="w-5 sm:w-7 md:w-8 lg:hidden"
                    src={assets.hamber_icon}
                    alt=""
                />
                {/* Mobile Menu */}
                <div
                    className={`${showMenu ? "fixed w-full" : "h-0 w-0"
                        } lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
                >
                    <div className="p-9">
                        <img
                            className="w-10 h-10 bg-orange-100 rounded-full p-3"
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt=""
                        />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <p className="text-black text-xl my-2">
                            Welcome to{" "}
                            <span className="text-orange-500 text-2xl ">AaRa's</span> Kitchen
                        </p>
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                            <p className="px-4 py-2 rounded inline-block">Home</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/menu">
                            <p className="px-4 py-2 rounded inline-block">Menu</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">
                            <p className="px-4 py-2 rounded inline-block">About</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact">
                            <p className="px-4 py-2 rounded inline-block">Contact Us</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/cart">
                            <p className="px-4 py-2 rounded inline-block">Your Cart Items</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/login">
                            <p className={`${token ? "hidden" : "px-4 py-2 rounded inline-block"}`}> Login</p>
                        </NavLink>
                        <hr className="w-[50%] border-orange-500" />
                        {/* <button
                        className="mt-2 text-white px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-500 transition-all duration-500 cursor-pointer"
                        onClick={() => {navigate("/login"),setShowMenu(false)}}
                        >
                            Login
                        </button> */}
                        <p className="text-sm mt-2">
                            Join the AaRa's Kitchen Family{" "}
                            <span className="text-orange-500 text-xl ">Today!</span>{" "}
                        </p>
                        <div className="flex justify-between items-center gap-3 mt-4">
                            <img
                                src={assets.facebook_icon}
                                alt=""
                                className="bg-orange-600"
                            />
                            <img
                                src={assets.linkedin_icon}
                                alt=""
                                className="bg-orange-600"
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
