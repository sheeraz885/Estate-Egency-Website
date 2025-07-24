import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

function Features() {
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
    },
    {
      icon: "fas fa-users",
      title: "EXPERT TEAM",
      description: "Our professional team has years of experience in real estate market."
    },
    {
      icon: "fas fa-handshake",
      title: "TRUSTED PARTNERS",
      description: "We work with trusted partners to ensure the best service quality."
    }
  ];

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
            Our Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the features that make us the leading real estate platform
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-estate-dark mb-6">
                Advanced Search Technology
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform uses cutting-edge technology to help you find the perfect property. 
                With advanced filters, AI-powered recommendations, and real-time market data, 
                finding your dream home has never been easier.
              </p>
              <ul className="space-y-3">
                {[
                  "Smart property matching algorithm",
                  "Real-time price updates",
                  "Interactive map search",
                  "Mobile-first design"
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-estate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Technology interface" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Expert consultation" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-estate-dark mb-6">
                Expert Consultation
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced real estate professionals is here to guide you through 
                every step of your property journey. From market analysis to final negotiations, 
                we ensure you make informed decisions.
              </p>
              <ul className="space-y-3">
                {[
                  "Personal property advisor",
                  "Market trend analysis",
                  "Investment guidance",
                  "Legal document support"
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-estate-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Features;
