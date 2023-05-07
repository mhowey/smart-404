const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send(`
    <h1>smart-404-lib</h1>
    <p>a library for creating "smart" 404 pages</p>
  `)
});

app.listen(port, () => {
  console.log('Express app started at http://localhost:4000');
}
);
