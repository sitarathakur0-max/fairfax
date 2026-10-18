import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnquiryRecord {
  referenceCode: string;
  fullName: string;
  phoneNumber: string;
  enquiryType: string;
  requirements: string;
  preferredContact: string;
  submittedAt: string;
  status: string;
}

const memoryStore: EnquiryRecord[] = [];
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  // Trust proxy in hosting environments for accurate client IP identification
  app.set('trust proxy', 1);

  app.use(express.json({ limit: '50kb' }));

  // Basic anti-spam and rate limiting middleware
  const rateLimitMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    const maxRequests = 5;

    const record = rateLimitMap.get(clientIp);
    if (!record) {
      rateLimitMap.set(clientIp, { count: 1, windowStart: now });
      return next();
    }

    if (now - record.windowStart > windowMs) {
      rateLimitMap.set(clientIp, { count: 1, windowStart: now });
      return next();
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        error: 'Too many enquiry submissions from this connection within a short period. Please contact Fairtax Solutions directly by calling +92 301 0159289.'
      });
    }

    record.count += 1;
    next();
  };

  // Health endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'active',
      business: 'Fairtax Solutions',
      location: 'Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, Punjab, Pakistan',
      phone: '+92 301 0159289'
    });
  });

  // Real backend submission endpoint for client enquiries
  app.post('/api/enquiries', rateLimitMiddleware, (req, res) => {
    const {
      fullName,
      phoneNumber,
      enquiryType,
      requirements,
      preferredContact,
      hp_company // Honeypot field for bot deterrence
    } = req.body || {};

    // 1. Honeypot check
    if (hp_company && String(hp_company).trim().length > 0) {
      // Silently reject or return 400 for spam bots
      return res.status(400).json({ error: 'Invalid form submission.' });
    }

    // 2. Strict field validations
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        error: 'Please enter a valid full name (at least 2 characters).'
      });
    }

    if (fullName.trim().length > 100) {
      return res.status(400).json({
        error: 'Full name exceeds allowable length.'
      });
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim().length < 7) {
      return res.status(400).json({
        error: 'Please enter a valid telephone number so our office can reach you.'
      });
    }

    const cleanPhone = phoneNumber.trim();
    // Allow standard international and domestic formats
    if (!/^[0-9+\s\-().]{7,25}$/.test(cleanPhone)) {
      return res.status(400).json({
        error: 'Please provide a valid phone number containing digits and standard formatting.'
      });
    }

    if (!requirements || typeof requirements !== 'string' || requirements.trim().length < 10) {
      return res.status(400).json({
        error: 'Please provide a brief description of your tax requirement (minimum 10 characters).'
      });
    }

    if (requirements.trim().length > 1500) {
      return res.status(400).json({
        error: 'Description exceeds maximum allowed characters (1,500 limit).'
      });
    }

    const validEnquiryTypes = [
      'Tax Preparation Enquiry',
      'Tax Compliance Question',
      'General Tax Consultancy',
      'Other Tax-Related Question'
    ];

    const sanitizedType = validEnquiryTypes.includes(enquiryType)
      ? enquiryType
      : 'General Tax Consultancy';

    const validContactMethods = ['Phone Call', 'Text Message'];
    const sanitizedContact = validContactMethods.includes(preferredContact)
      ? preferredContact
      : 'Phone Call';

    // 3. Generate reference number
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `FT-${new Date().getFullYear()}-${randomSuffix}`;

    const newRecord: EnquiryRecord = {
      referenceCode,
      fullName: fullName.trim(),
      phoneNumber: cleanPhone,
      enquiryType: sanitizedType,
      requirements: requirements.trim(),
      preferredContact: sanitizedContact,
      submittedAt: new Date().toISOString(),
      status: 'Received'
    };

    memoryStore.push(newRecord);

    console.log(`[Fairtax Solutions] New Enquiry Logged: Ref #${referenceCode} for ${newRecord.fullName} (${sanitizedType})`);

    return res.status(201).json({
      success: true,
      referenceCode,
      message: 'Enquiry received successfully by Fairtax Solutions.',
      details: {
        enquiryType: sanitizedType,
        preferredContact: sanitizedContact,
        officeNotice: 'An advisor will review your requirement and follow up using your preferred contact method.',
        officeAddress: 'Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, Punjab, Pakistan',
        officePhone: '+92 301 0159289'
      }
    });
  });

  // In production, serve built frontend; in development, mount Vite dev server
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fairtax Solutions server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
