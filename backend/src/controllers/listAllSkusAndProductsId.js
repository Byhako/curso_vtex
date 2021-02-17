const api = require('axios');

module.exports = {
  // index, show, delete, put, patch
  index(req, res) {
    const response = api.get('https://inmmerce59.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds', {
      headers: {
        
      }
    });
  }
}
