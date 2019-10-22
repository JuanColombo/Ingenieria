$(document).ready(
    function ()
    {
              $(".fondo").fadeIn(5000);
              $("#Tituloh4").bind("click",mostrarOcultarTitulo);
              $("#enlacetecnologia").bind("click",mostrarTecnologia);
              $("#enlacepea").bind("click",mostrarpea);
              $(".volveralplan").bind("click",mostrarplandeestudio);
              $("#enlaceeconomia").bind("click",mostrareconomia);
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
function mostrareconomia() {
    $("#carreras").hide();
    $("#economia").slideDown(2000);
}
function mostrarplandeestudio(){
    $("#tecnologia").hide(1500);
    $("#pea").hide(1500);
    $("#economia").hide(1500);
    $("#carreras").show(1500);
}