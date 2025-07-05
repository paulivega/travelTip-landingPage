# TravelTip - AI Travel Planner

## Overview

TravelTip is a full-stack web application that helps users plan personalized travel itineraries using artificial intelligence. The application is built as a landing page with newsletter signup functionality, designed to collect user interest before the main AI-powered travel planning features are released.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom travel-themed color palette
- **Component Library**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful endpoints with JSON responses

### Key Components

1. **Landing Page System**
   - Hero section with AI travel planning value proposition
   - Step-by-step explanation of how the service works
   - Feature highlights showcasing AI capabilities
   - Destination gallery with travel inspiration
   - Customer testimonials section
   - Contact information and newsletter signup

2. **Newsletter Management**
   - Email collection system for user interest
   - Duplicate email prevention
   - Success/error handling with user feedback
   - Admin endpoint for viewing signups

3. **UI Component System**
   - Comprehensive design system based on shadcn/ui
   - Custom brand colors (turquoise, coral, blue, orange)
   - Responsive design with mobile-first approach
   - Accessibility features built-in

## Data Flow

1. **User Interaction**: Users visit the landing page and interact with the newsletter signup form
2. **Form Submission**: Email addresses are validated client-side with Zod schemas
3. **API Request**: Frontend sends POST request to `/api/newsletter-signup`
4. **Database Operation**: Server checks for existing emails and creates new signup records
5. **Response Handling**: Success/error messages are displayed to users via toast notifications

## External Dependencies

- **Database**: Neon PostgreSQL (serverless)
- **Images**: Unsplash for destination and background images
- **Fonts**: Google Fonts (preconnected)
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific tooling for development environment

## Deployment Strategy

### Development Environment
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs in development mode with request logging
- Database migrations handled via Drizzle Kit
- Replit integration for cloud development

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: esbuild bundles server code for Node.js
- Database: Uses DATABASE_URL environment variable
- Static assets served from Express in production

### Database Schema
```sql
-- Users table (prepared for future authentication)
users: {
  id: serial primary key,
  username: text unique not null,
  password: text not null
}

-- Newsletter signups
newsletter_signups: {
  id: serial primary key,
  email: text unique not null,
  created_at: timestamp default now()
}
```

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```