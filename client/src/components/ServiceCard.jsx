import { motion } from "framer-motion";

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="service-card text-white text-center"
    >
      <motion.div 
        className="w-16 h-16 border-2 border-teal-400 bg-transparent mx-auto mb-6 flex items-center justify-center transform rotate-45"
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <i className={`${service.icon} text-teal-400 text-2xl transform -rotate-45`}></i>
      </motion.div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;
