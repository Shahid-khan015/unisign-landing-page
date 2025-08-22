export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Handle contact form submission
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }
    
    // In a real app, you would save this to a database or send an email
    res.status(200).json({ 
      success: true,
      message: 'Thank you for contacting UniSign. We will get back to you soon.',
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}