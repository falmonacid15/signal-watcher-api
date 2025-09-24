import express from 'express';

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('app running on port 3000');
});
