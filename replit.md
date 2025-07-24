# replit.md

## Overview

This is a full-stack real estate website built with a modern tech stack featuring React frontend and Express backend. The application appears to be a property listing and real estate services platform with multiple pages including home, features, about, listings, gallery, blog, and contacts. The architecture follows a monorepo structure with separate client and server directories, shared schema definitions, and a PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with custom configuration
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Animations**: Framer Motion for page transitions and animations

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot reload with tsx, esbuild for production builds
- **API Structure**: RESTful endpoints with `/api` prefix

### Data Layer
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared TypeScript definitions between client and server

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` for type safety across the stack
- **Validation**: Zod schemas integrated with Drizzle for runtime validation

### Frontend Pages
- Home page with hero sections and property showcases
- Features page highlighting platform capabilities  
- About page with company information
- Listing page for property browsing
- Gallery for property images
- Blog system with property-related content
- Contact forms and information

### UI System
- Complete shadcn/ui implementation with custom theming
- Dark/light mode support via CSS variables
- Responsive design with mobile-first approach
- Accessible components using Radix UI primitives

### Development Tools
- TypeScript strict mode configuration
- ESM modules throughout the stack
- Path aliases for clean imports
- Replit-specific development tooling integration

## Data Flow

### Client-Server Communication
- API requests handled through custom `apiRequest` utility
- TanStack Query for caching and synchronization
- Credential-based authentication with session cookies
- JSON communication between client and server

### Database Interactions
- Drizzle ORM provides type-safe database operations
- Connection pooling through Neon serverless driver
- Migration system for schema evolution
- Memory storage fallback for development

### State Management
- Server state managed by TanStack Query
- Local component state with React hooks
- No global client state management currently implemented

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- Connection via `@neondatabase/serverless` driver
- Environment-based configuration

### UI Dependencies
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **FontAwesome**: Additional icon support

### Development Dependencies
- **Vite**: Fast build tool and dev server
- **ESBuild**: Production bundling
- **PostCSS**: CSS processing
- **TypeScript**: Type checking and compilation

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory
- Backend bundles to `dist/index.js` with esbuild
- Static assets served by Express in production
- Vite development server in development mode

### Environment Configuration
- Database URL required via environment variables
- Separate development and production modes
- Replit-specific configuration for cloud deployment

### Production Considerations
- Express serves static files in production
- Database migrations run via `db:push` command
- Session storage persisted to PostgreSQL
- Error handling with proper HTTP status codes

The application is designed as a modern real estate platform with room for expansion into features like user authentication, property management, search functionality, and interactive property viewing capabilities.