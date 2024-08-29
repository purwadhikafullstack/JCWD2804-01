import express, { json, urlencoded, Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PORT } from './config';

// Import routes
import roomRoutes from './routers/roomRoutes';
import roomAvailabilityRoutes from './routers/roomAvailRoutes';
import peakSeasonRateRoutes from './routers/peakRoutes';
import authRoutes from './routers/authRoutes'; // Import auth routes

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    
    // Add API routes
    this.addRoutes();
  }

  private addRoutes(): void {
    // Register the routes
    this.app.use('/api/rooms', roomRoutes);
    this.app.use('/api/rooms/:roomId/availability', roomAvailabilityRoutes);
    this.app.use('/api/rooms/:roomId/peak-rates', peakSeasonRateRoutes);
    this.app.use('/api/auth', authRoutes); // Add auth routes
  }

  private handleError(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        console.error('Error : ', err.stack);
        res.status(500).send('Error !');
      } else {
        next();
      }
    });
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
