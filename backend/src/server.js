const e = require('express');
require('dotenv').config();
const express = require('express');
const server = express();
const router = require('./router');

server.use(express.json());
server.use(router);

server.listen(3000, () => {
  console.info('Server running');
});
