# Sliders
https://kenwheeler.github.io/slick/

http://getbem.com/introduction/

https://help.vtex.com/tutorial/list-of-controls-for-templates--tutorials_563#

https://cssreference.io/

https://css-tricks.com/snippets/css/system-font-stack/

### font to base64
https://transfonter.org/


@import url('/arquivos/checkout.css')

# Tipo postman
https://insomnia.rest/products/designer/

# Api Vtex
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-product





vtex install vtex.reviews-and-ratings@2.x

vtex install vtex.admin-pages
vtex install vtex.store

vtexjs.checkout.orderFormItmes
updateItems
nombre del producto


# reunion profe
https://calendly.com/zeluizr/fast-meet


https://ruben--tiendatest3.myvtex.com


vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var items = orderForm.items;
    items.forEach(function(item, index) {
      var name = item.name.replace(/[^A-Za-z0-9 ]/g, '');
      items[index].name = name;
    })
    return vtexjs.checkout.sendAttachment('items', items)
  })