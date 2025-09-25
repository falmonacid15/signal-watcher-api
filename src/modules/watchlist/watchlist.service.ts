import { prisma } from '../../config/prisma';

export const createWatchlist = async (data: {
  name: string;
  terms: string[];
}) => {
  return await prisma.watchlist.create({
    data: {
      name: data.name,
      terms: data.terms,
    },
  });
};

export const getAllWatchlists = async () => {
  return await prisma.watchlist.findMany({
    include: { events: true },
  });
};
