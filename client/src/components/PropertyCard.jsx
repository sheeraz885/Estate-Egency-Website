import { motion } from "framer-motion";

function PropertyCard({ property, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -20, 
        scale: 1.02,
        rotateY: 2,
        boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      className="group property-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer relative"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-estate-red/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative overflow-hidden">
        <motion.img 
          src={property.image} 
          alt={property.title}
          className="w-full h-56 object-cover"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Animated overlay */}
        <motion.div 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
          initial={false}
        />
        
        {/* Price tag with enhanced animation */}
        <motion.div 
          className="absolute bottom-4 left-4 bg-estate-red text-white px-4 py-2 rounded-lg font-bold shadow-lg"
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.3) 50%, currentColor 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}
          >
            {property.price}
          </motion.span>
        </motion.div>
        
        {/* Type badge with bounce animation */}
        <motion.div 
          className="absolute top-4 left-4 bg-white text-estate-dark px-3 py-1 rounded-full text-sm font-medium shadow-md"
          animate={{ 
            y: [0, -5, 0],
            boxShadow: [
              "0 4px 8px rgba(0,0,0,0.1)",
              "0 8px 16px rgba(0,0,0,0.15)",
              "0 4px 8px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: index * 0.3
          }}
        >
          {property.type}
        </motion.div>
        
        {/* Heart icon with pulse animation */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <i className="fas fa-heart text-estate-red"></i>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6 relative z-10"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex items-center mb-3"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.i 
            className="fas fa-map-marker-alt text-estate-red mr-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.5
            }}
          />
          <h3 className="font-bold text-estate-dark group-hover:text-estate-red transition-colors duration-300">
            {property.title}
          </h3>
        </motion.div>
        
        <motion.p 
          className="text-gray-600 text-sm mb-5"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {property.location}
        </motion.p>
        
        <div className="grid grid-cols-4 gap-2 text-gray-600 text-sm">
          {[
            { icon: "fas fa-home", value: `${property.sqft} sqft` },
            { icon: "fas fa-bed", value: property.bedrooms },
            { icon: "fas fa-bath", value: property.bathrooms },
            { icon: "fas fa-car", value: property.garage }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col items-center p-2 rounded-lg bg-gray-50 group-hover:bg-estate-red/10 transition-colors duration-300"
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                backgroundColor: "rgba(238, 68, 68, 0.1)"
              }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
            >
              <motion.i 
                className={`${item.icon} text-estate-red mb-1`}
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: (index * 0.2) + (idx * 0.3)
                }}
              />
              <span className="font-medium">{item.value}</span>
            </motion.div>
          ))}
        </div>
        
        {/* View Details Button */}
        <motion.button
          className="w-full mt-4 bg-estate-red text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 8px 16px rgba(238, 68, 68, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.button>
      </motion.div>
      
      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-estate-red/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}

export default PropertyCard;
