// ボタンのCSS（例）
// $(function(){
//   $('button').on('click',()=>{
//     $('button').css('background-color', 'red');
//   })
// });

$('button').hover(
    function(){
      $('button').css('background-color', '#00f');
    },
    function(){
      $('button').css('background-color', '#f00');
    }
  );

//   $('.category-list').slick({
//     autoplay: true,         //自動再生
//     autoplaySpeed: 0,       //自動再生のスピード
//     speed: 2500,            //スライドスピード
//     slidesToShow: 3,        //スライドの表示枚数
//     cssEase: "linear",      //スライドの動きを等速に
//     pauseOnHover: false,    //ホバーしても止まらないように
//     pauseOnFocus: false,    //フォーカスしても止まらないように
// });

// $(function () {
//    // ボタンアニメーション
//    $('.button-more').on('mouseover', function () {
//      $(this).animate({
//        opacity: 0.5,
//        marginLeft: 20,
//      }, 100);
//    });
//  });