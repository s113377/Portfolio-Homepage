//Sub_Nav Active
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


//Modal dom//
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

 // Graph animation 함수
    function animBar() {
        $('.skill-per').each(function(){
            var $this = $(this);
            var per = $this.attr('data-per');
            $this.css('width', per + '%');
            $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                duration: 1000,
                step: function () {
                    $this.attr('data-per', Math.floor(this.animatedValue) + '%');
                },
                complete: function () {
                    $this.attr('data-per', Math.floor(this.animatedValue) + '%');
                    animFlag = false;
                }
            });
        });
    }
    
    $(window).on('scroll', function () {
        var skillTop = $('#skills').offset().top; // skill 섹션 위치
        var windowTop = $(this).scrollTop(); // 윈도우 스크롤 위치
        var scrollOffset = 300; // 스크롤 위치 보정값

        // skill 섹션에서 그래프 애니메이션
        if (windowTop >= (skillTop - scrollOffset)) {
            animBar();
            console.log('애니메이션바 실행')
             // 이벤트 한번만 작동하고 끔(스크롤시 이벤트 계속 중복되서 문제생김)
            $(window).off();
        }
    })

//Nav_scroll //
$(document).ready(function(){
    //변수지정
   var $menu = $('.container .gnb li');
   var $contents = $('section')

    $menu.click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        var tt = $contents.eq(idx).offset().top;
        console.log(tt)
     $('html,body').animate({scrollTop:tt})
    })
});


