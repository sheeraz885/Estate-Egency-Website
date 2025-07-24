import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import ServiceCard from "../components/ServiceCard";
import { properties } from "../data/properties";
import { blogPosts } from "../data/blogPosts";

function Home() {
  const services = [
    {
      icon: "fas fa-home",
      title: "BEST PROPERTY LISTS",
      description: "We provide consumers with a content-rich listings in a handy format."
    },
    {
      icon: "fas fa-thumbs-up",
      title: "BEST PRICE IN MARKET",
      description: "Price estimates and sales histories for property, updating information."
    },
    {
      icon: "fas fa-certificate",
      title: "GUARANTEED SERVICES",
      description: "Our managers will keep you informed and you can act with certainty."
    },
    {
      icon: "fas fa-chart-line",
      title: "MARKETING RESEARCH",
      description: "All our marketing researchers today have a tough job multitasking."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&h=1080')"
          }}
        />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-white text-estate-dark px-4 py-2 rounded mb-6 font-medium"
            >
              HOUSE FOR SALE
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              87 Mishaum Point Rd
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl mb-8"
            >
              Dartmouth, MA 02748
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white text-estate-red px-8 py-4 rounded-lg inline-block"
            >
              <span className="text-3xl font-bold">$1,249,000</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Search Filters */}
      <section className="bg-estate-dark py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Property Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
              <option>Sold</option>
            </select>
            
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Property Location</option>
              <option>New York</option>
              <option>California</option>
              <option>Massachusetts</option>
            </select>
            
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Property Style</option>
              <option>Modern</option>
              <option>Traditional</option>
              <option>Contemporary</option>
            </select>
            
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3+ Bedrooms</option>
            </select>
            
            <select className="bg-gray-700 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-estate-red">
              <option>Bathrooms</option>
              <option>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3+ Bathrooms</option>
            </select>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
          >
            <div className="text-white">
              <label className="block mb-2">Area</label>
              <input type="range" min="0" max="5000" defaultValue="2500" className="w-full accent-estate-red" />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>0</span>
                <span>5000</span>
              </div>
            </div>
            
            <div className="text-white">
              <label className="block mb-2">Price</label>
              <input type="range" min="0" max="5000000" defaultValue="1249000" className="w-full accent-estate-red" />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>$0</span>
                <span>$5M</span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <motion.button 
                className="bg-estate-red text-white px-8 py-4 rounded font-semibold hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEARCH
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-estate-red mr-2"></i>
                <h2 className="text-3xl font-bold text-estate-dark">87 Mishaum Point Rd,</h2>
              </div>
              <p className="text-estate-gray mb-6">Dartmouth, MA 02748</p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                On the best lot at Phuket is situated the Kailua Residence. It features ipe hardwood flooring on the interior and granite stone flooring on the lanais, high vaulted cedar ceilings.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Quiet Neighborhood",
                  "Fabulous Views", 
                  "Great Local Community",
                  "Large Play Center In Yard"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-estate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="bg-estate-red text-white px-6 py-3 rounded font-bold text-xl">
                  $1,249,000
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <i className="fas fa-home mr-2"></i>
                    <span>1,286 sqft</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bed mr-2"></i>
                    <span>2</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bath mr-2"></i>
                    <span>3</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-car mr-2"></i>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern luxury house with pool" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-estate-dark text-center mb-12"
          >
            RECENT PROPERTIES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=600')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-estate-dark mb-6">
                Search Best Deals <span className="text-estate-red">on Go</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
              </p>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12" />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex justify-center space-x-6">
                <motion.div 
                  className="relative"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-64 h-[500px] bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-200">
                    <div 
                      className="w-full h-full bg-blue-500 rounded-[2rem] overflow-hidden"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=450')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                      <div className="absolute bottom-8 left-4 right-4">
                        <div className="bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
                          <div className="bg-estate-red p-2 rounded">
                            <i className="fas fa-home text-white text-sm"></i>
                          </div>
                          <div>
                            <div className="font-bold text-sm">ESTATE</div>
                            <div className="text-xs text-gray-500">Real Estate Guide</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative mt-12"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-64 h-[500px] bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-200">
                    <div 
                      className="w-full h-full bg-green-100 rounded-[2rem] overflow-hidden"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=450')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    >
                      <div className="p-4">
                        <div className="bg-white rounded-lg p-2 mb-4 shadow-lg">
                          <div className="text-xs text-gray-500">Search location...</div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-estate-red w-4 h-4 rounded-full border-2 border-white shadow-lg ml-20"></div>
                          <div className="bg-estate-red w-4 h-4 rounded-full border-2 border-white shadow-lg ml-32"></div>
                          <div className="bg-estate-red w-4 h-4 rounded-full border-2 border-white shadow-lg ml-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=600')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
          >
            Thank your team for your hard work, advice, honesty and commitment to enable us to sell my mothers house.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="font-semibold text-lg">IRINE GORE</div>
            <div className="text-blue-200">3 YEARS</div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-estate-dark mb-8"
              >
                FROM THE BLOG
              </motion.h2>
              
              <div className="space-y-8">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="blog-card flex items-start space-x-6 bg-gray-50 p-6 rounded-lg cursor-pointer"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-24 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-estate-dark mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{post.meta}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-estate-dark mb-6">LATEST TWEETS</h3>
              <div className="space-y-6">
                <div className="text-sm">
                  <p className="text-gray-600 mb-2">
                    <span className="text-estate-dark font-semibold">@axenesshomes</span> For the better more, bright and colorful, windows and professional #ownproperties
                  </p>
                  <p className="text-gray-400 text-xs">2 hours ago</p>
                </div>
                
                <div className="text-sm">
                  <p className="text-gray-600 mb-2">
                    <span className="text-estate-dark font-semibold">@axenesshomes</span> We combine finances imports and illustrationsync super! Check out Soccer Club #PostPrint Bizarre by Axe...
                  </p>
                  <p className="text-gray-400 text-xs">4 hours ago</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
