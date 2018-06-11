$(function() {



    //banner slider
    $("#js-banner-slider").slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
                    vertical: false
                }
            }
            ]
    });




    $(".burger").on('click', function () {
        $("#aside-menu-modal").addClass('is-shown');
        $('body').addClass('aside-menu-open');
    });

    $(".close").on('click', function () {
        $("#aside-menu-modal").removeClass('is-shown');
        $('body').removeClass('aside-menu-open');
    });



    $(".tabs li").on('click', function () {
        $(this).addClass('is-active').siblings().removeClass('is-active');
    });



});

