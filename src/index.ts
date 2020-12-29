import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'Ola, estou tentando usar typescript kkkkk'
  });
});

app.listen(3333);
