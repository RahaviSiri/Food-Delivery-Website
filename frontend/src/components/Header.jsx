import React from 'react';
import { assets } from '../frontend_assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[65vw] sm:h-[50vw] md:h-[40vw] lg:h-[34vw] mx-auto">
      {/* Header Image */}
      <img
        src={assets.header_img}
        alt="Delicious food at AaRa's Kitchen"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />

      {/* Overlay Content */}
      <div className="animate-fadeIn absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40 text-white px-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
          Order Your Favourite Foods Here!
        </h2>
        <p className="text-xs sm:text-md md:text-lg max-w-2xl mb-6">
          Cooking with fresh, flavorful tomatoes has never been easier. Trust 
          <span className="text-orange-500 font-semibold"> AaRa's Kitchen </span> 
          for quality you can taste and convenience you can rely on. Shop online now and experience the difference!
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="px-4 py-2 sm:px-7 sm:py-4 md:px-8 md:py-3 text-white bg-orange-600 hover:bg-orange-500 rounded-full text-xs md:text-lg shadow-md transition-all duration-300"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
