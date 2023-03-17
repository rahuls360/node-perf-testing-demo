import express from 'express';

const PORT = 8000;
const app = express();

export function startMetricsServer() {
  app.get('/metrics', (req, res) => {
    res.send('Sent from metrics');
  });
  app.listen(PORT, () => {
    console.log(`Tracking metrics on PORT: ${PORT}`);
  })
}