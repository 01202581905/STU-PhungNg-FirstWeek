$(document).ready(function () {

    $(window).scroll(function() {
        if ($(this).scrollTop() < 1000) {
            $('#button-scrolltop').removeClass('scrolltop');
        } else {
            $('#button-scrolltop').addClass('scrolltop');
        }
    }).trigger('scroll');

    $('.slider').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 800,
        pause: 10000,
        autoDelay: 1000,
        nextText: '<i class="fas fa-chevron-right"></i>',
        prevText: '<i class="fas fa-chevron-left"></i>'
    });

    $('.business__slideshow').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        prevArrow: '<div class="button-arr btn-arr-prev">Prev</div>',
        nextArrow: '<div class="button-arr btn-arr-next">Next</div>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    $("#scrolltop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        setTimeout(function(){
            $("#button-scrolltop").addClass('scrolltop');
        }, 800);
        setTimeout(function(){
            $("#scrolltop").addClass('displaynone');
        }, 1000);
    });
    
    const arrPage = Array.from($('.bx-controls .bx-pager-item'));
    Array.from($('.slider__item-img')).map((ele) => {
        let value = $(ele).attr("data-id");
        $(arrPage[value]).addClass('pageSlide hoverSlide hoverSlide'+value);
    });
    $('.item-child-after').click(function(event){
        $(this).parent().children('.sub-menu').toggleClass("sub-menu-open");
        event.preventDefault();
    });
    $('main').click(function() {
        if( $('.header__menu-dropdown').hasClass('open-dropdown')){
            $('.header__menu-dropdown').removeClass('open-dropdown');
        }
    });

    $('.nav-trigger').click(function(){
        $('.header__menu-dropdown').toggleClass('open-dropdown');
    });
});