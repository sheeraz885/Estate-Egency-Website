import { motion } from "framer-motion";

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-estate-red border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-estate-dark font-medium">Loading ESTATE...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
