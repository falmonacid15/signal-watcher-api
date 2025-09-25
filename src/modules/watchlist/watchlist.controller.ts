import { Request, Response, NextFunction } from 'express';
import * as service from './watchlist.service';

export const createWatchlist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await service.createWatchlist(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getAllWatchlists = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await service.getAllWatchlists();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
