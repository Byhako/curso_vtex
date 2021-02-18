const axios = require('axios');

module.exports = {
  // index, show, delete, put, patch
  index(req, res) {
    axios.get(process.env.URL_LIST_SKU,
    {
      headers: {
        'X-VTEX-API-AppKey': process.env.APP_KEY,
        'X-VTEX-API-AppToken': process.env.APP_TOKEN
      }
    })
    .then(function (response) {
      // handle success
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.error('Error', error);
      res.send('Error');
    });
  }
}
