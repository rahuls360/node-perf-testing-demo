import express from 'express';
import { startMetricsServer } from './metrics';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello!!')
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: ", PORT);
  startMetricsServer();
})