const axios = require('axios');

module.exports = {
  // index, show, delete, put, patch
  async index(req, res) {
    const productId = req.query.productId;
    const url = `${process.env.URL_SEARCH_PRODUCT}?fq=productId:${productId}`;

    const response = await axios.get(url)
    .catch(function (error) {
      console.error('Error', error);
      res.send('Error');
    });

    res.json(response.data);
  }
}
