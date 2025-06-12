import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import React, {useState} from "react";


const Navbar: React.FC = () => {
const [sidebarOpen, setSidebarOpen] = useState(false);

return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      {/* Logo/Brand */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-extrabold text-orange-500 hover:text-orange-600 transition"
      >
        <span className="bg-orange-100 rounded-full px-2 py-1 text-orange-500">
          BI
        </span>
        <span className="hidden sm:inline">Bright Identity</span>
      </Link>
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-400 font-medium">
        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-orange-500 transition">
          Shop
        </Link>
        <Link to="/customize" className="hover:text-orange-500 transition">
          Customize
        </Link>
        <Link to="/gallery" className="hover:text-orange-500 transition">
          Gallery
        </Link>
        <Link to="/about" className="hover:text-orange-500 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-orange-500 transition">
          Contact
        </Link>
      </nav>
      {/* Cart Icon */}
      <div className="flex flex-row gap-2 justify-center items-center">
      <Link
        to="/checkout"
        className="relative text-orange-500 hover:text-orange-600 text-2xl transition"
      >
        <span role="img" aria-label="cart">
          🛒
        </span>
        {/* Example badge for cart items */}
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
          2
        </span>
      </Link>
     <button className="md:hidden p-2 rounded hover:bg-orange-100 transition">
        <GiHamburgerMenu size={27}
        onClick={() => setSidebarOpen(true)}
        />
      </button>
      
      </div>
      {/* Mobile Menu Button (optional for future) */}
     
    </div>
    {/* Mobile Nav (optional for future) */}
    {/* <div className="md:hidden px-6 pb-2 flex flex-col gap-2 bg-white shadow">
      ...mobile links...
    </div> */}

      {/* Sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6 transition-transform duration-300 transform translate-x-0 animate-slide-in-right">
              <button
                className="self-end text-gray-500 hover:text-indigo-600 mb-6"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                &times;
              </button>
              <nav className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Settings
                </a>
               
              </nav>
              <div className="mt-auto pt-8">
                <a
                  href="/admin-login"
                  className="block text-indigo-600 font-semibold underline"
                >
                  AdminAccess
                </a>
              </div>
            </aside>
            <style>{`
              @keyframes slide-in-right {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
              .animate-slide-in-right {
                animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </>
        )}
  </header>
)
  
};
export default Navbar;
