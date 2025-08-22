# Overview

UniSign is a web application designed to make sign language accessible to deaf and mute students through innovative AI-powered learning experiences. The application combines interactive 3D models, AI-driven text-to-sign conversion, gamified vocabulary challenges, and comprehensive quiz systems to create an engaging educational platform. Built as a full-stack React application with Express.js backend, UniSign focuses on accessibility-first design and multi-language support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system including gradients, shadows, and HSL color variables
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: React Router for client-side navigation with structured page components
- **Internationalization**: Custom localization context supporting English, Hindi, and Gujarati

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and extensible interface for production databases
- **API Design**: RESTful API structure with /api prefix and centralized error handling

## Database & Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Schema**: Centralized schema definition in shared directory with Zod validation
- **Migration**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Design System
- **Component Library**: Comprehensive UI component library with variants and consistent styling
- **Accessibility**: Focus on accessibility with proper ARIA labels, keyboard navigation, and screen reader support
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme System**: CSS custom properties with light/dark mode support and gradient-based visual hierarchy

## Project Structure
- **Monorepo Approach**: Shared schema and types between client and server
- **Client Directory**: React application with organized components, pages, and utilities
- **Server Directory**: Express backend with modular routing and storage abstraction
- **Shared Directory**: Common types, schemas, and validation logic

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Class Variance Authority**: Type-safe component variants
- **Lucide Icons**: Consistent icon library

## Development Tools
- **Vite**: Fast build tool with React plugin and Replit-specific enhancements
- **TypeScript**: Type safety across the entire application
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Database and Backend
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database operations with automatic migrations
- **Connect PG Simple**: PostgreSQL session store for Express

## Form Handling and Validation
- **React Hook Form**: Efficient form management with validation
- **Hookform Resolvers**: Integration with Zod for schema validation
- **Zod**: Runtime type validation and schema definition

## Additional Features
- **Date-fns**: Date manipulation and formatting
- **Embla Carousel**: Touch-friendly carousel component
- **React Query**: Server state management with caching
- **Sonner**: Toast notifications system