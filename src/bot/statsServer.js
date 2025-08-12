import express from 'express';
import cors from 'cors';
import { botConfig } from './config.js';

export function createStatsServer(getStats) {
  const app = express();
  app.use(cors());

  app.get('/api/stats', (req, res) => {
    const stats = getStats();
    if (stats) {
      res.json(stats);
    } else {
      res.json(botConfig.discord.fallbackStats);
    }
  });

  return app;
}