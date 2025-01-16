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

$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".fadeInUp,.fadeInDown,.fadeInLeft,.fadeInRight").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 100) {
                $(this).addClass("fadeIn");
            }
        });
    });
});

// クラスの付け外しのみ
const text = document.querySelector('.text');

text.classList.add('is-active');

setInterval(() => {
  text.classList.toggle('is-active');
}, 3000);

$(function () {
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top; 
      var speed = 500;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });
  