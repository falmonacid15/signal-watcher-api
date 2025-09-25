import { Router } from 'express';
import * as controller from './watchlist.controller';

const router = Router();

router.post('/', controller.createWatchlist);
router.get('/', controller.getAllWatchlists);

export default router;
