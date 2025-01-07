$(function () {
    $(".photo-left").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        slidesToShow: 8,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,
    });
});

$(function () {
    $(".photo-right").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        slidesToShow: 8,
        swipe: false,
        pauseOnFocus: false, 
        pauseOnHover: false,
        arrows: false,
        rtl: true
    });
});