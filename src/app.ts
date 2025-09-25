import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { requestLogger } from './middlewares/logger';
import { errorHandler } from './middlewares/errorHandler';

import watchlistRoutes from './modules/watchlist/watchlist.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

app.use(requestLogger);

app.use('/api/watchlists', watchlistRoutes);

app.use(errorHandler);

export default app;
