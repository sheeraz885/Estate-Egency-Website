import { motion } from "framer-motion";

function PropertyCard({ property, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
      viewport={{ once: true }}
      className="property-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <motion.img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute bottom-4 left-4 bg-estate-red text-white px-4 py-2 rounded font-bold">
          {property.price}
        </div>
        <div className="absolute top-4 left-4 bg-white text-estate-dark px-3 py-1 rounded text-sm font-medium">
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <i className="fas fa-map-marker-alt text-estate-red mr-2"></i>
          <h3 className="font-bold text-estate-dark">{property.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{property.location}</p>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center">
            <i className="fas fa-home mr-1"></i>
            <span>{property.sqft} sqft</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bed mr-1"></i>
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bath mr-1"></i>
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-car mr-1"></i>
            <span>{property.garage}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PropertyCard;
