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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-estate-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-estate-dark mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
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
      <section className="py-16 bg-estate-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Office Locations
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: "121 King Street, NY 10013",
                phone: "+1 (555) 123-4567",
                email: "ny@yourestate.com"
              },
              {
                city: "Los Angeles",
                address: "456 Sunset Blvd, CA 90028",
                phone: "+1 (555) 234-5678",
                email: "la@yourestate.com"
              },
              {
                city: "Miami",
                address: "789 Ocean Drive, FL 33139",
                phone: "+1 (555) 345-6789",
                email: "miami@yourestate.com"
              }
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-bold mb-4 text-estate-red">{office.city}</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center justify-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {office.address}
                  </p>
                  <p className="flex items-center justify-center">
                    <i className="fas fa-phone mr-2"></i>
                    {office.phone}
                  </p>
                  <p className="flex items-center justify-center">
                    <i className="fas fa-envelope mr-2"></i>
                    {office.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contacts;
