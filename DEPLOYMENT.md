# Vercel Deployment Guide for UniSign

## Project Structure
This project is now configured for Vercel deployment with:
- Frontend: React + Vite (builds to `dist/public/`)
- API: Serverless functions in `api/` directory
- Configuration: `vercel.json` with proper routing

## Deployment Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Import your repository

### 2. Configuration
The project includes:
- `vercel.json` - Deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `api/` directory - Serverless functions

### 3. Environment Variables (if needed)
Set these in Vercel dashboard if you plan to add:
- `DATABASE_URL` - Database connection string
- `NEXTAUTH_SECRET` - Authentication secret
- Any other API keys

### 4. Build Settings
Vercel will automatically detect:
- Build Command: `vite build`
- Output Directory: `dist/public`
- Install Command: `npm install`

## API Endpoints
Available serverless functions:
- `/api/` - Main API status
- `/api/health` - Health check
- `/api/contact` - Contact form handler

## Frontend Features
✅ Mobile responsive design
✅ Multi-language support (English, Hindi, Gujarati)
✅ Auto scroll-to-top on navigation
✅ Optimized footer design
✅ Consistent styling across all pages

## Build Verification
To test locally before deploying:
```bash
npm run build
```

## Post-Deployment
After successful deployment:
1. Test all pages and language switching
2. Verify API endpoints work
3. Check mobile responsiveness
4. Test contact form functionality

The application is ready for production deployment on Vercel!