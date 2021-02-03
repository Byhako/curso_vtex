$(function() {
  $(".btn-buscar").val("");

  $('.ui-autocomplete').appendTo('.busca');

  // Envio de email desde footer
  $('.box-1 form button').click(function(e) {
    e.preventDefault();
    let datos = {};
    datos.isNewsletterOptIn = true;
    datos.email = $('.box-1 form input#email').val();
  
    $.ajax({
      headers: {
        Accept: "application/json; charset=utf-8",
        "Content-Type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(datos),
      type: "PATCH",
      url: "//api.vtexcrm.com.br/inmmerce59/dataentities/CL/documents",
      success: function(data) {
        console.info(data);
        $("").text('Email suscrito con exito.');
      },
      error: function(error) {
        console.error(error);
        $("").text('Ocurrio un error.');
      },
    });
  })

})