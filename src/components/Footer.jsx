import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#202730] text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-lg font-bold mb-8">
        <div className="flex items-center space-x-2">
  <img
    src="/logoPhoto.png"
    alt="Logo"
    className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />
  {/* <div className="flex-shrink-0 text-orange-500 font-bold text-xl">BAYG</div> */}
</div>

        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-b border-gray-500 pb-8">
          {/* Hardware */}
          <div>
            <h2 className="font-bold mb-2">Hardware</h2>
            <ul className="space-y-1 text-sm">
              <li>Industrial Tools and Consumables</li>
              <li>Machinery and Spare Parts</li>
              <li>HouseKeeping Essentials</li>
              <li>Stationary and Computers</li>
              <li>Horticulture Machine Spares</li>
              <li>AgriCulture Machine Spares</li>
            </ul>
          </div>

          {/* Home Links */}
          <div>
            <h2 className="font-bold mb-2">Explore</h2>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange-400">Products</Link></li>
              <li><Link to="/contactus" className="hover:text-orange-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="font-bold mb-2">Terms & Conditions</h2>
            <ul className="space-y-1 text-sm">
              <li><Link to="/termsofuse" className="hover:text-orange-400">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold mb-2">Contacts</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-orange-500 mt-1" /> P8, 1501 Siddharth Vihar, Ghaziabad, India</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-orange-500" /><a href="tel:+91-7906266780"><pre> +91-7906266780</pre></a>,<a href="tel:+91-8588940423"><pre>+91-8588940423</pre></a></li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-orange-500"/><a href="mailto:bayg.sales@gmail.com">bayg.sales@gmail.com</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-bold mb-2">Social Media</h2>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Twitter" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
