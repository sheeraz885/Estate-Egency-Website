import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

function Blog() {
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
            Real Estate Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Stay updated with the latest trends and insights in real estate
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="text-sm text-estate-red font-medium mb-2">
                          {post.category}
                        </div>
                        <h2 className="text-2xl font-bold text-estate-dark mb-3">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{post.meta}</p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-estate-red font-medium hover:underline"
                          >
                            Read More →
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
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
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Search */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-estate-dark mb-4">Search Blog</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full p-3 pr-10 border rounded focus:outline-none focus:ring-2 focus:ring-estate-red"
                  />
                  <button className="absolute right-3 top-3 text-gray-400 hover:text-estate-red">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-estate-dark mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[
                    "Interior Design",
                    "Market Trends",
                    "Investment Tips",
                    "Home Improvement",
                    "Luxury Properties",
                    "First Time Buyers"
                  ].map((category, index) => (
                    <motion.li
                      key={category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-estate-red transition-colors flex items-center justify-between"
                      >
                        <span>{category}</span>
                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-estate-dark mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 cursor-pointer group"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-estate-dark group-hover:text-estate-red transition-colors text-sm leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Latest Tweets */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-estate-dark mb-4">Latest Tweets</h3>
                <div className="space-y-4">
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
              </div>

              {/* Newsletter */}
              <div className="bg-estate-dark text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to get the latest updates and exclusive content.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 rounded text-black focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-estate-red text-white py-3 rounded font-medium hover:bg-red-600 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Blog;
