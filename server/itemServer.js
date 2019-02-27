const express = require('express');
const app = express();

const list = [];

app.post('/', (req, res) => {
  list.push(req.body.value);

  res.send(list);
});

app.get('/', (req, res) => {
  res.send(list);
});

module.exports = app;
