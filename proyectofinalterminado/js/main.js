$(document).ready(function(){
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra*0.10;

        $('body').css({
            //el menos invierte el sentido del fondo
            'background-position':'0 -' + posicion + 'px'
            
        })
    });
});