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

