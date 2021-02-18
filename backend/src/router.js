const express = require('express');
const router = express.Router();
const listSku = require('./controllers/listAllSkusAndProductsId');
const listProduct = require('./controllers/listProductController');

router.get('/', (req, res) => {
  res.send('Servidor bailando');
});

router.get('/list-sku', listSku.index);
router.get('/list-products', listProduct.index);

module.exports = router;
