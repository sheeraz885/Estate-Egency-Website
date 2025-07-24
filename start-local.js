#!/usr/bin/env node

// Local development server script
// This script sets up the environment to run on localhost:7891
process.env.NODE_ENV = 'development';
process.env.PORT = '7891';

console.log('🚀 Starting ESTATE Real Estate Website...');
console.log('📍 Server will run on: http://localhost:7891');
console.log('🏠 Navigate to the URL above to view your website');
console.log('');

// Import and run the server
import('./server/index.js').catch((error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});