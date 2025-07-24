import { motion } from "framer-motion";

function Contacts() {
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Location",
      details: ["121 King Street", "New York, NY 10013", "United States"]
    },
    {
      icon: "fas fa-phone",
      title: "Phone Numbers",
      details: ["+800 1234 56 78", "+800 1234 56 79", "Available 24/7"]
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      details: ["contact@yourestate.com", "support@yourestate.com", "info@yourestate.com"]
    },
    {
      icon: "fas fa-clock",
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Message sent successfully!");
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with our expert team for all your real estate needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-estate-dark mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're here to help you with all your real estate needs. Reach out to us through any of these channels.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-estate-red/20 transition-all duration-300"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-estate-red/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                
                {/* Icon with gradient background */}
                <div className="relative z-10 mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-estate-red to-red-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${info.icon} text-2xl`}></i>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-estate-dark mb-6 group-hover:text-estate-red transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <motion.p 
                        key={idx} 
                        className="text-gray-600 text-sm leading-relaxed font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-estate-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-estate-dark mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red">
                    <option value="">Select a subject</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-estate-red"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-estate-red text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className="h-full min-h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <i className="fas fa-map-marked-alt text-6xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                  <p>121 King Street, New York, NY 10013</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-estate-red text-white px-6 py-2 rounded font-medium hover:bg-red-600 transition-colors"
                  >
                    View on Google Maps
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-estate-dark via-gray-800 to-estate-dark text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-estate-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Visit us at any of our convenient locations across the country
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: "121 King Street, NY 10013",
                phone: "+1 (555) 123-4567",
                email: "ny@yourestate.com",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              },
              {
                city: "Los Angeles",
                address: "456 Sunset Blvd, CA 90028",
                phone: "+1 (555) 234-5678",
                email: "la@yourestate.com",
                image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
              },
              {
                city: "Miami",
                address: "789 Ocean Drive, FL 33139",
                phone: "+1 (555) 345-6789",
                email: "miami@yourestate.com",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
              }
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                viewport={{ once: true }}
                className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:border-estate-red/50 transition-all duration-300 overflow-hidden"
              >
                {/* City image header */}
                <div className="relative mb-6 -mx-8 -mt-8">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-8 text-2xl font-bold text-white group-hover:text-estate-red transition-colors duration-300">
                    {office.city}
                  </h3>
                </div>
                
                {/* Contact details */}
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start space-x-3 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-estate-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt text-estate-red text-sm"></i>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{office.address}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-estate-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-estate-red text-sm"></i>
                    </div>
                    <p className="text-gray-300 text-sm">{office.phone}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-estate-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-estate-red text-sm"></i>
                    </div>
                    <p className="text-gray-300 text-sm">{office.email}</p>
                  </motion.div>
                </div>
                
                {/* Call to action button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-estate-red text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                  Visit Office
                </motion.button>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-estate-red/20 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-tr from-white/10 to-transparent rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contacts;
