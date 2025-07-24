# ESTATE Real Estate Website

A modern, fully responsive real estate website built with React, Express.js, and Tailwind CSS. Features beautiful animations, interactive property galleries, and a complete multi-page experience.

## 🚀 Features

- **Multi-page Navigation**: Home, Features, About, Listings, Gallery, Blog, and Contacts
- **Advanced Animations**: Framer Motion powered smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Gallery**: Property filtering with beautiful hover effects
- **Contact Forms**: Enhanced contact sections with glassmorphism effects
- **Loading Animations**: Professional loading spinners and page transitions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Routing**: Wouter for client-side navigation
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom estate theme

## 🏠 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd estate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server on localhost:7891**
   ```bash
   # Option 1: Using the local development script
   node start-local.js
   
   # Option 2: Using npm with custom port
   PORT=7891 npm run dev
   ```

4. **Open your browser**
   Navigate to: `http://localhost:7891`

### Development Commands

- `npm run dev` - Start development server (default port)
- `PORT=7891 npm run dev` - Start on custom port 7891
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

## 🌐 Vercel Deployment

### Quick Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI if not already installed
   npm i -g vercel
   
   # Deploy
   vercel
   ```

### Automatic Deployment

1. **Connect to GitHub**
   - Push your code to a GitHub repository
   - Connect the repository to Vercel

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   Add any required environment variables in Vercel dashboard

### Manual Deployment Steps

1. **Prepare for deployment**
   ```bash
   npm run build
   ```

2. **Verify build output**
   - Check `dist/public` for client files
   - Check `dist/index.js` for server bundle

3. **Deploy to Vercel**
   - Upload the project to Vercel
   - Vercel will automatically detect the configuration from `vercel.json`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express server
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
├── dist/                  # Build output
├── vercel.json           # Vercel deployment config
├── start-local.js        # Local development script
└── README.md             # This file
```

## 🎨 Customization

### Colors & Themes
- Edit `client/src/index.css` for custom color variables
- Modify `tailwind.config.ts` for theme customization

### Content & Images
- Update property data in Gallery page
- Replace placeholder images with your own
- Modify contact information in Contacts page

### Animations
- Customize Framer Motion animations in component files
- Adjust timing and easing in motion configurations

## 📱 Features Overview

### Home Page
- Hero section with call-to-action
- Featured properties showcase
- Services overview
- Testimonials section

### Gallery Page
- Interactive property filtering
- Beautiful hover animations
- Category-based browsing
- High-quality property images

### Contact Page
- Enhanced contact forms
- Office location cards with city images
- Interactive maps integration ready
- Social media links

## 🔧 Configuration

### Port Configuration
- Development: `localhost:7891` (configurable)
- Production: Environment-based (Vercel auto-assigns)

### Environment Variables
- `NODE_ENV`: development/production
- `PORT`: Server port (7891 for local dev)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support, please contact:
- Email: support@yourestate.com
- Website: [Your Website URL]

---

**Ready to showcase amazing properties with style!** 🏡✨