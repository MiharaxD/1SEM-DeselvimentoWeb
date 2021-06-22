$(document).ready(function () {

    $("#esconder").click(function () 
    {
        $(".px").hide();
    });

    $("#aparecer").click(function()
    {
        $(".px").show();
    });

    $(".imagensx").click(function()
    {
        $(this).animate({
            width: '500px',
            height: '500px',
        });
    });

    $(".imagensx").dblclick(function()
    {
        $(this).animate({
            width: '250px',
            height: '250px',
        });
    });

    $(".imagensy").mouseenter(function()
    {
        $(this).hide({
        });
    });

    $("#aparecery").click(function()
    {
        $(".imagensy").show({
        });
    });

    $(".paragrafo").mouseenter(function()
    {
        $(this).addClass("marcador1")({
            
        });
    });

    $(".paragrafo").mouseleave(function()
    {
        $(this).addClass("marcador2");
        alert ("Parabens você leu o paragrafo")
    });

});