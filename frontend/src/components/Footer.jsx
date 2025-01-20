import React from "react";
import { assets } from "../frontend_assets/assets.js";

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-10 mt-10">
      {/* Footer Content */}
      <div className="px-10 flex flex-col sm:flex-row items-start gap-6 md:gap-10">
        {/* Logo and Description */}
        <div className="flex-1 flex flex-col items-start">
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
            ab dolores et non repellat temporibus quaerat! Voluptatum molestias
            cupiditate hic ducimus quisquam.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4 underline">Company</h2>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Delivery</li>
            <li className="hover:underline cursor-pointer">Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4 underline">Get In Touch</h2>
          <ul className="space-y-2">
            <li className="hover:underline"><i className="fa fa-phone mr-2" aria-hidden="true"></i> {" "}{" "}
             074 0902 539</li>
            <li className="hover:underline"><i className="fa fa-envelope mr-2" aria-hidden="true"></i> {" "}{" "}
             rahavi24siri@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-orange-600" />

      {/* Copyright */}
      <p className="text-center text-sm">
        &copy; 2025 <span className="font-bold">AaRa's Kitchen</span> - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
