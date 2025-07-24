import { motion } from "framer-motion";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function Listing() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    status: "",
    location: "",
    type: "",
    minPrice: 0,
    maxPrice: 5000000
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = properties;
    
    if (newFilters.status) {
      filtered = filtered.filter(p => p.status.toLowerCase().includes(newFilters.status.toLowerCase()));
    }
    
    if (newFilters.location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(newFilters.location.toLowerCase()));
    }
    
    if (newFilters.type) {
      filtered = filtered.filter(p => p.type.toLowerCase().includes(newFilters.type.toLowerCase()));
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="py-16 bg-estate-dark text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Property Listings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find your perfect property from our extensive collection
          </motion.p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            <select 
              className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-estate-red"
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <option value="">All Status</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
              <option value="sold">Sold</option>
            </select>
            
            <select 
              className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-estate-red"
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="MA">Massachusetts</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
            </select>
            
            <select 
              className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-estate-red"
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="townhouse">Townhouse</option>
              <option value="apartment">Apartment</option>
            </select>
            
            <input
              type="range"
              min="0"
              max="5000000"
              defaultValue="2500000"
              className="p-3 accent-estate-red"
              onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
            />
            
            <motion.button 
              className="bg-estate-red text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl font-bold text-estate-dark">
              {filteredProperties.length} Properties Found
            </h2>
            <select className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Sort by Price</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded ${
                    page === 1 
                      ? 'bg-estate-red text-white' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  } transition-colors`}
                >
                  {page}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Listing;
