export default function handler(req: any, res: any) {
  // Basic API endpoint for Vercel
  res.status(200).json({ 
    message: 'UniSign API is running',
    timestamp: new Date().toISOString(),
    method: req.method,
    version: '1.0.0'
  });
}