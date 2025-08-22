# Static Vercel Deployment for UniSign

## Project Configuration
This project is configured for **static deployment only** to Vercel:
- Frontend: React + Vite (builds to `dist/public/`)
- Backend: Ignored (Express server not deployed)
- Configuration: Static-only `vercel.json`

## Deployment Steps

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Import your repository

### 2. Static Configuration
The project includes:
- `vercel.json` - Static deployment configuration
- `.vercelignore` - Excludes backend files from deployment

### 3. Build Settings
Vercel will automatically use:
- Build Command: `vite build`
- Output Directory: `dist/public`
- Install Command: `npm install`

## Features Included
✅ Mobile responsive design
✅ Multi-language support (English, Hindi, Gujarati)
✅ Auto scroll-to-top on navigation
✅ Optimized footer design
✅ SPA routing with fallback to index.html

## Important Notes
- Express backend is NOT deployed (static frontend only)
- All routes redirect to index.html for client-side routing
- No serverless functions included
- Database features will not work in deployed version

## Build Verification
```bash
npm run build
```

The application is ready for static deployment on Vercel!