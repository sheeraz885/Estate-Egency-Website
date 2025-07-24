import { Link } from "wouter";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-google-plus-g", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
  ];

  return (
    <footer className="bg-estate-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">CONTACTS</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              We are the leading real estate and rental marketplace dedicated to empowering consumers with data.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-estate-red mr-3"></i>
                <span>121 King Street, NY, USA</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-estate-red mr-3"></i>
                <span>+800 1234 56 78</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-estate-red mr-3"></i>
                <span>contact@yourestate.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="text-gray-300 hover:text-white transition-colors">HOME</a></Link></li>
              <li><Link href="/features"><a className="text-gray-300 hover:text-white transition-colors">SUPPORT</a></Link></li>
              <li><Link href="/about"><a className="text-gray-300 hover:text-white transition-colors">ABOUT US</a></Link></li>
              <li><Link href="/listing"><a className="text-gray-300 hover:text-white transition-colors">LISTING</a></Link></li>
              <li><Link href="/gallery"><a className="text-gray-300 hover:text-white transition-colors">GALLERY</a></Link></li>
              <li><Link href="/contacts"><a className="text-gray-300 hover:text-white transition-colors">CONTACTS</a></Link></li>
            </ul>
          </motion.div>
          
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">ABOUT US</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the places they call home, and connecting them with the best local professionals who can help.
            </p>
          </motion.div>
          
          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">FOLLOW US</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-estate-red transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center mb-4 md:mb-0"
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
            
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>ESTATE © 2016 All Rights Reserved</p>
              <div className="flex space-x-4 mt-2 justify-center md:justify-end">
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Advertisement</a>
                <a href="#" className="hover:text-white transition-colors">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
