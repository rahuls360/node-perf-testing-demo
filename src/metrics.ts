import express from 'express';
import Prometheus from "prom-client";

const PORT = 8000;
const app = express();

export function startMetricsServer() {
  Prometheus.collectDefaultMetrics();
  
  app.get('/metrics', async(req, res) => {
    res.set("Content-Type", Prometheus.register.contentType);

    return res.send(await Prometheus.register.metrics());
  });
  app.listen(PORT, () => {
    console.log(`Tracking metrics on PORT: ${PORT}`);
  })
}