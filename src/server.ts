import express from 'express'
import { startMetricsServer } from './metrics';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello!!')
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: ", PORT);
  startMetricsServer();
})