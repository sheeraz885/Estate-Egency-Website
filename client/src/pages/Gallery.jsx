import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Properties' },
    { id: 'house', name: 'Houses' },
    { id: 'apartment', name: 'Apartments' },
    { id: 'villa', name: 'Villas' },
    { id: 'condo', name: 'Condos' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Modern Villa",
      description: "Luxury 4BR villa with pool",
      category: "villa"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Downtown Apartment",
      description: "2BR modern apartment",
      category: "apartment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Family House",
      description: "3BR suburban home",
      category: "house"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Luxury Condo",
      description: "High-rise city condo",
      category: "condo"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Beach Villa",
      description: "Oceanfront villa",
      category: "villa"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Studio Apartment",
      description: "Cozy studio downtown",
      category: "apartment"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-estate-dark via-gray-800 to-estate-dark text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-estate-red rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full blur-2xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
              <motion.i 
                className="fas fa-images text-estate-red text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm font-medium tracking-wide">PROPERTY SHOWCASE</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
          >
            Property Gallery
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Discover breathtaking architecture and stunning interiors from our exclusive property collection
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              className="group relative px-8 py-4 bg-estate-red text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Gallery</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating geometry */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 border-2 border-white/20 rounded-lg"
          animate={{ 
            rotate: [0, 45, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-12 h-12 border-2 border-estate-red/30 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>

      {/* Enhanced Filter Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-estate-red rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center space-x-2 bg-estate-red/10 rounded-full px-4 py-2 mb-6"
            >
              <motion.i 
                className="fas fa-filter text-estate-red"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-estate-red font-medium text-sm">FILTER & EXPLORE</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-estate-dark mb-6">
              Browse by <span className="text-estate-red">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the perfect property type that matches your lifestyle and preferences
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-estate-red text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-100 hover:border-estate-red/20'
                }`}
              >
                {/* Animated background for active state */}
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                    layoutId="activeCategory"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-estate-red/10 to-estate-red/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center space-x-2">
                  <motion.i 
                    className={`fas fa-home ${
                      selectedCategory === category.id ? 'text-white' : 'text-estate-red'
                    }`}
                    animate={selectedCategory === category.id ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>{category.name}</span>
                </span>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Active filter indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <span className="text-gray-600">Showing:</span>
              <motion.span 
                className="font-bold text-estate-red"
                key={selectedCategory}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </motion.span>
              <motion.div
                className="w-2 h-2 bg-estate-red rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-1/4 w-40 h-40 bg-estate-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: filteredImages.length, label: "Properties", icon: "fas fa-home" },
                { number: "24/7", label: "Support", icon: "fas fa-headset" },
                { number: "100%", label: "Satisfaction", icon: "fas fa-star" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-estate-red/10 rounded-full mb-4"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(238, 68, 68, 0.2)" }}
                  >
                    <i className={`${stat.icon} text-estate-red text-2xl`}></i>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-estate-dark mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -20, 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-3">
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-xl">
                      <motion.img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1, rotate: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      
                      {/* Overlay with animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Zoom icon */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, rotate: -180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <i className="fas fa-search-plus text-estate-red"></i>
                      </motion.div>
                      
                      {/* Category badge */}
                      <motion.div
                        className="absolute top-4 left-4 bg-estate-red text-white px-3 py-1 rounded-full text-sm font-medium"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 4px 8px rgba(238, 68, 68, 0.3)",
                            "0 8px 16px rgba(238, 68, 68, 0.4)",
                            "0 4px 8px rgba(238, 68, 68, 0.3)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        {categories.find(cat => cat.id === image.category)?.name}
                      </motion.div>
                      
                      {/* Title overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Card footer */}
                    <motion.div 
                      className="p-4"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-sm text-gray-600 font-medium">Available</span>
                        </div>
                        
                        <motion.button
                          className="text-estate-red hover:text-red-600 font-medium text-sm flex items-center space-x-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View Details</span>
                          <i className="fas fa-arrow-right text-xs"></i>
                        </motion.button>
                      </div>
                    </motion.div>
                    
                    {/* Decorative corner gradient */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-estate-red/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-center py-20"
            >
              <motion.div
                className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fas fa-search text-gray-400 text-3xl"></i>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Properties Found</h3>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Try selecting a different category to explore more amazing properties.
              </p>
              <motion.button
                className="mt-6 px-6 py-3 bg-estate-red text-white rounded-full font-medium hover:bg-red-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
              >
                View All Properties
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-br from-estate-dark via-gray-800 to-estate-dark text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-estate-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Find Your <span className="text-estate-red">Dream Property</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Browse our extensive property listings and find the perfect home that matches your lifestyle and budget.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="bg-estate-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 transition-colors shadow-2xl"
          >
            View All Listings
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}

export default Gallery;