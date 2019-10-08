$(document).ready(
    function ()
    {
              $(".fondo").fadeIn(5000);
              $("#Tituloh4").bind("click",mostrarOcultarTitulo);
              $("#enlacetecnologia").bind("click",mostrarTecnologia);
              $("#enlacepea").bind("click",mostrarpea);

    }
);
function mostrarOcultarTitulo(){
    $("#TituloIndex").fadeToggle();
}
function mostrarTecnologia() {
    $("#carreras").fadeOut();
    $("#tecnologia").fadeIn(2000);
}
function mostrarpea() {
    $("#carreras").fadeOut();
    $("#pea").slideDown(2000);
}