import React, { useState } from 'react';
import { assets } from "../frontend_assets/assets.js"

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-[150vw] md:h-[60vw] lg:h-[45vw] flex items-center justify-center bg-cover bg-center bg-no-repeat  px-4"
         style={{ backgroundImage: `url(${assets.bg})` }}>
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {state === "Sign Up" ? "Create an Account" : "Login to Your Account"}
        </h2>
        <form className="space-y-6">
          {state === "Sign Up" && (
            <div className="flex items-center border-b border-gray-300 py-2">
              <i className="fa fa-user text-gray-500 mr-3"></i>
              <input
                type="text"
                placeholder="Enter Name"
                className="flex-1 bg-transparent outline-none text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="flex items-center border-b border-gray-300 py-2">
            <i className="fa fa-envelope text-gray-500 mr-3"></i>
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-transparent outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-b border-gray-300 py-2">
            <i className="fa fa-unlock-alt text-gray-500 mr-3"></i>
            <input
              type="password"
              placeholder="Enter Password"
              className="flex-1 bg-transparent outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {state === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"} 
          <button
            className="text-orange-500 font-semibold hover:underline ml-1"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
