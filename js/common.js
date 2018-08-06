$(function() {



    //banner slider
    $("#js-banner-slider").slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        customPaging : function(slider, i) {
            return '<a href="#" class="banner-slider__dot"></a>';
        },
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    vertical: false,
                    autoplay: false,
                }
            }
            ]
    });



    //burger
    $(".burger").on('click', function () {
        $("#aside-menu-modal").addClass('is-shown');
        $('body').addClass('aside-menu-open');
    });

    //burger close
    $(".close").on('click', function () {
        $("#aside-menu-modal").removeClass('is-shown');
        $('body').removeClass('aside-menu-open');
    });


    //tabs
    $(".tabs li").on('click', function () {
        $(this).addClass('is-active').siblings().removeClass('is-active');
        var target = $('.tabs-content__item').eq($(this).index());
        target.addClass('is-shown').siblings().removeClass('is-shown');
    });


    $('.field--select').select2(
        {
            minimumResultsForSearch: -1
        }
    );


    autosize($('textarea'));


});

