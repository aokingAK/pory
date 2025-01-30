///////. フェードインを実装////////
$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();
          // それぞれのblockクラスに対して…
          $(".fadeInUp").each(function () {
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

///////// 時差フェードイン////////
$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();
          // それぞれのblockクラスに対して…
          $(".fadeInUp2").each(function () {
              // それぞれのblockクラスのウィンドウからの高さを取得
              const bPosition = $(this).offset().top;
              // スクロールした量が要素の高さを上回ったら
              // その数値にウィンドウの高さを引き、最後に200pxを足す
          if (wScroll > bPosition - wHeight + 100) {
              $(this).addClass("fadeIn2");
          }
      });
  });
});

/////////// スムーズなリンク移動//////////
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

/////// フェードインスライド////////
var $slide = $(".slide")
  .slick({
    fade: true,    // fedeオン
    speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true         // 無限リピート オン・オフ
  });
