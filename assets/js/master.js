$(document).ready(function () {   
    $('.textos').hide();
    $('#menuAlterno, #menuAlterno1, #menuAlterno2, #menuAlterno3, #menuAlterno4').hide();
    hideAllSections();
    
    $('.outer-loader').delay(1000).fadeOut('slow');

    $('#btnMedellin').click(function(){
        $(this).addClass('active');
        $('#med-caract, #med-estruc, #med-instru, #med-cicle1, #med-cicle2, #med-line, .med-title, .med-btnCar, .med-btnEE, .med-btnIns').removeClass('hidener');
    });
    $('#btnManizales').click(function(){
        $(this).addClass('active');
        $('#man-caract, #man-estruc, #man-instru, #man-cicle1, #man-cicle2, #man-line, .man-title, .man-btnCar, .man-btnEE, .man-btnIns').removeClass('hidener');
    });
    $('#btnAcacias').click(function(){
        $(this).addClass('active');
        $('#aca-caract, #aca-estruc, #aca-instru, #aca-cicle1, #aca-cicle2, #aca-line, .aca-title, .aca-btnCar, .aca-btnEE, .aca-btnIns, .aca-text, .aca-line').removeClass('hidener');
    });
    $('#btnSalento').click(function(){
        $(this).addClass('active');
        $('#sal-caract, #sal-estruc, #sal-instru, #sal-cicle1, #sal-cicle2, #sal-line, .sal-title, .sal-btnCar, .sal-btnEE, .sal-btnIns, .sal-text, .sal-line').removeClass('hidener');
    });
    $('#btnNuqui').click(function(){
        $(this).addClass('active');
        $('#nuq-caract, #nuq-estruc, #nuq-instru, #nuq-cicle1, #nuq-cicle2, #nuq-line, .nuq-title, .nuq-btnCar, .nuq-btnEE, .nuq-btnIns').removeClass('hidener');
    });

    $('#med-caract').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-2');
        $('#med-caracteristicas').show();
    });
    $('#med-estruc').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-2');
        $('#med-estructura-ecologica').show();
    });
    $('#med-instru').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-2');
        $('#med-instrumentos').show();
    });

    $('#man-caract').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-3');
        $('#man-caracteristicas').show();
    });
    $('#man-estruc').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-3');
        $('#man-estructura-ecologica').show();
    });
    $('#man-instru').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-3');
        $('#man-instrumentos').show();
    });

    $('#aca-caract').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-4');
        $('#aca-caracteristicas').show();
    });
    $('#aca-instru').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-4');
        $('#aca-instrumentos').show();
    });

    $('#sal-caract').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-5');
        $('#sal-caracteristicas').show();
    });
    $('#sal-instru').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-5');
        $('#sal-instrumentos').show();
    });

    $('#nuq-caract').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-6');
        $('#nuq-caracteristicas').show();
    });
    $('#nuq-instru').click(function(){
        hideAllSections();
        $(this).addClass('active');
        $(this).pagepiling.moveTo('section-6');
        $('#nuq-instrumentos').show();
    });
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

function hideAllSections(){
    $('#med-instrumentos, #med-estructura-ecologica, #med-caracteristicas, #man-instrumentos, #man-estructura-ecologica, #man-caracteristicas, #aca-instrumentos, #aca-caracteristicas, #sal-instrumentos, #sal-caracteristicas, #nuq-instrumentos, #nuq-caracteristicas').hide();
}

function hideShowElement( hideElem, showMenu, showElem, elem) {
    $('#menuAlterno').each(function(){
        $('button').removeClass('active');
    });
    elem.addClass('active');
    $('#'+hideElem).hide();
    $('.textos').hide();
    $('#'+showMenu).show();
    $('#'+showElem).show();
}