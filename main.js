$(function(){
    var tabAnchor = $('.Sub_GNB li');
    var tabPanel = $('.tabPanel');

    tabAnchor.click(function(e){
        e.preventDefault();
       
        tabAnchor.removeClass('active');
        $(this).addClass('active');

    tabPanel.hide();

    var $targetIdx = $(this).index();
    console.log($targetIdx)
    tabPanel.eq($targetIdx).show();
    });
    
    tabAnchor.eq(0).trigger('click');
});

$(document).ready(function(){
    var Btn = $('.tabPanel #Btn');
    var close = $('.close');
    var Modal = $('#Modal')

    Btn.click(function(e){
        e.preventDefault();
         $(this).next().stop().show();
    close.click(function(){
         $(this).parents('#Modal').hide();
    })
    })
})