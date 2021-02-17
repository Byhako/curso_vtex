const express = require('express');
const router = express.Router();
const listSku = require('./controllers/listAllSkusAndProductsId');

router.get('/', (req, res) => {
  res.send('Servidor bailando');
});

router.post('/', listSku.index);

module.exports = router;
