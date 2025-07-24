import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "FEATURES", path: "/features" },
    { name: "ABOUT US", path: "/about" },
    { name: "LISTING", path: "/listing" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACTS", path: "/contacts" },
  ];

  return (
    <nav className="bg-estate-dark text-white fixed w-full top-0 z-40">
      {/* Top Contact Bar */}
      <div className="bg-estate-gray text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span><i className="fas fa-map-marker-alt mr-2"></i>121 King Street, NY, USA</span>
            <span><i className="fas fa-envelope mr-2"></i>contact@yourestate.com</span>
          </div>
          <div className="text-right">
            <span className="mr-2">CALL US:</span>
            <span className="font-semibold">800 123 45 67</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-estate-red p-2 mr-3">
                <i className="fas fa-home text-white text-xl"></i>
              </div>
              <div>
                <div className="font-bold text-xl">ESTATE</div>
                <div className="text-xs text-gray-300">YOUR REAL ESTATE GUIDE</div>
              </div>
            </motion.div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.span 
                  className={`nav-link font-medium cursor-pointer transition-colors duration-300 ${
                    location === item.path ? 'text-estate-red' : 'hover:text-estate-red'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-estate-dark border-t border-gray-600"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span 
                    className={`block py-2 px-4 transition-colors duration-300 cursor-pointer ${
                      location === item.path ? 'text-estate-red bg-gray-700' : 'hover:text-estate-red hover:bg-gray-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
