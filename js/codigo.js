$(document).ready(
    function ()
    {
              $(".fondo").fadeIn(5000);
              $("#Tituloh4").bind("click",mostrarOcultarTitulo);
    }
);
function mostrarOcultarTitulo(){
    $("#TituloIndex").fadeToggle();
}