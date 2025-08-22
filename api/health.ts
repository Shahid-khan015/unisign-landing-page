export default function handler(req: any, res: any) {
  res.status(200).json({ 
    status: 'healthy',
    service: 'UniSign',
    environment: 'production',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
}