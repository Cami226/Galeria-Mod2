$(document).ready(function () {
  const imagenes = $(".miniatura");
  let indiceActual = 0;

  function mostrarImagen(index) {
    const src = imagenes.eq(index).attr("src");
    $("#imagen-modal").attr("src", src);
    $("#modal").fadeIn();
    indiceActual = index;
  }

  $(".miniatura").click(function () {
    const index = $(this).data("index");
    mostrarImagen(index);
  });

  $(".cerrar, .modal").click(function (e) {
    if ($(e.target).is("#imagen-modal") === false && !$(e.target).is("button")) {
      $("#modal").fadeOut();
    }
  });

  $(".siguiente").click(function (e) {
    e.stopPropagation();
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  $(".anterior").click(function (e) {
    e.stopPropagation();
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
  });
});
