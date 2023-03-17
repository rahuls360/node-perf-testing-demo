import express from 'express'

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello!!!')
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT: ", PORT);
  
})