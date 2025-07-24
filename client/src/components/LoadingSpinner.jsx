import { motion } from "framer-motion";

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Main rotating spinner */}
        <motion.div className="relative mb-8">
          <motion.div
            className="w-20 h-20 border-4 border-estate-red/20 border-t-estate-red rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner rotating element */}
          <motion.div
            className="absolute inset-2 w-12 h-12 border-2 border-gray-300/30 border-b-gray-400 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Center logo */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-8 h-8 bg-estate-red rounded flex items-center justify-center">
              <i className="fas fa-home text-white text-sm"></i>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Loading text with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-estate-dark mb-2">ESTATE</h2>
          <motion.p 
            className="text-gray-600 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading your real estate guide...
          </motion.p>
        </motion.div>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-estate-red rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
