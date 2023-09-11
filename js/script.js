$(document).ready(function(){

  // AOS
  AOS.init();

 // 햄버거버튼 script
  $('header .hamberger').click(function () {
    $(this).find('span').toggleClass('active');
       if ($(this).find('span').hasClass('active')) {
          $('.hbg-box').addClass('active')
           $('.hbg-wrap').fadeIn('active')
       } else{
        $('.hbg-box').removeClass('active')
        $('.hbg-wrap').fadeOut('active')
       }
   });
   $('.hbg-wrap').click(function(){
    $(this).fadeOut('active')
    $('.hbg-box').removeClass('active');
    $('header .hamberger').find('span').removeClass('active')
   });

  // 모바일 메뉴클릭 script
  $('.hbg-box .menu-top').click(function(){

    $(this).siblings().find('.top-menu svg').removeClass('active');
    $(this).siblings().children('.sub-menu').slideUp();
    $(this).find('.top-menu svg').toggleClass('active');
    $(this).children('.sub-menu').slideToggle();
  });

  // 헤더 메뉴 script
  $('.menu-wrap a').mouseenter(function(){
    $(this).siblings().addClass('active');
  });
  $('.menu-wrap').mouseleave(function(){
    $('.menu-list').removeClass('active');
  });

  // 헤더 스크롤 이벤트
  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    if(sct >= 200){
        $('header').addClass('active');
        $('header .header-wrap .menu-all-wrap .menu-wrap .menu-list li:first-child a').addClass('active');
        $('header .header-wrap .menu-all-wrap .menu-wrap .menu-list a').addClass('active');
        $('header .header-wrap .menu-all-wrap a').addClass('active');
    }else{
        $('header').removeClass('active');
        $('header .header-wrap .menu-all-wrap .menu-wrap .menu-list li:first-child a').removeClass('active');
        $('header .header-wrap .menu-all-wrap .menu-wrap .menu-list a').removeClass('active');
        $('header .header-wrap .menu-all-wrap a').removeClass('active');
    }
});

//상단이동버튼
const btn = $('.top-btn');
$(window).scroll(function(){
if($(window).scrollTop() > 300){
    btn.fadeIn();
}else{
    btn.fadeOut();
}
});

btn.on('click',function(e){

e.preventDefault();
$('html,body').animate({
    scrollTop: 0
},300);
});

//상단이동버튼 색상 변경
$(window).scroll(function(){
  const sec1 = $('.sec1').offset().top;
  const sec2 = $('.sec2').offset().top;
  const sec3 = $('.sec3').offset().top;
  const sec4 = $('.sec4').offset().top;
  const sec45 = $('.sec-4-5').offset().top;
  const sec5 = $('.sec5').offset().top;
  const sec56 = $('.sec-5-6').offset().top;
  const sec6 = $('.sec6').offset().top;
  const sec7 = $('.sec7').offset().top;
  const sec8 = $('.sec8').offset().top;
  const sec9 = $('.sec9').offset().top;

  const sct = $(window).scrollTop();

  if(sct >= sec1 && sct < sec2){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec2 && sct < sec3){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec3 && sct < sec4){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec4 && sct < sec45){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec45 && sct < sec5){
    $('.top-btn').addClass('active');
  }else if(sct >= sec5 && sct < sec56){
    $('.top-btn').addClass('active');
  }else if(sct >= sec56 && sct < sec6){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec6 && sct < sec7){
    $('.top-btn').removeClass('active');
  }else if(sct >= sec7 && sct < sec8){
    $('.top-btn').addClass('active');
  }else if(sct >= sec8 && sct < sec9){
    $('.top-btn').removeClass('active');
  }
  
  

});


$('.sec-wrap .sec1 .sec1-txt-wrap').mouseenter(function(){
  $('.sec-wrap .sec1 .sec1-txt-wrap .main-txt-wrap .main-txt-bottom .sec1-btn-box a').addClass('active');
});
$('.sec-wrap .sec1 .sec1-txt-wrap').mouseleave(function(){
  $('.sec-wrap .sec1 .sec1-txt-wrap .main-txt-wrap .main-txt-bottom .sec1-btn-box a').removeClass('active');
});


// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    
    375: {
      slidesPerView: 1,  //브라우저가 375보다 클 때
      // spaceBetween: 20,
      slidesPerGroup: 1,
    },
    760: {
      slidesPerView: 2,  //브라우저가 760보다 클 때
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    960: {
      slidesPerView: 3,  //브라우저가 960보다 클 때
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,  //브라우저가 1200보다 클 때
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },
 

  // autoplay: {
  //           delay: 5000,
  //           disableOnInteraction: false,
  //         },
});


// sec4-tab
$('.btn li').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');

  const clik = $(this).attr('data-alt');

  $('.tabs div').removeClass('active');
  $(`#${clik}`).addClass('active');
});
  
  
// sec5

// scroll
$(window).scroll(function(){
  var sec5Bottom = $(window).scrollTop();
  // console.log('windowScrollTop is '+sec5Bottom)
  var sec5ScrollNum = 1/12 * sec5Bottom + -1500/12;
  $('.sec3 .sec3-scroll h1').css('left', sec5ScrollNum+'%');


  var sec5Top = $(window).scrollTop();
  // console.log('windowScrollTop is '+sec5Top)
  var sec5ScrollNum = 1/3.5 * sec5Top + -1800/3;
  $('.sec3 .sec3-scroll h2').css('right', sec5ScrollNum+'%');
 

  // sec5 변수선언
  var sec5Top = $('.sec5-the-awards-right').offset().top;

  var sec5FixedMargin = 300;
  var sec5TopMargin = sec5Top - sec5FixedMargin;
  // console.log(sec5TopMargin)
  var sec5TopBottom = $('.sec5-the-awards-right').offset().top + $('.sec5-bg').height() - 900;
  // console.log(sec5Top);
  


  if(sec5TopMargin <= sec5Bottom && sec5Bottom < sec5TopBottom) {
    // console.log('working scroll')
    var plusPx = sec5Bottom - sec5Top + sec5FixedMargin;
    $('.sec5-the-awards-right-cont').css({
      marginTop: plusPx+'px'
    })
  }

});






// sec7

$('.sec7-wrap .sec7-gallery-inner .sec7-gallery-item').mouseenter(function(){
  $(this).siblings().find('img').addClass('active');
});
$('.sec7-wrap .sec7-gallery-inner .sec7-gallery-item').mouseleave(function(){
  $('.sec7-wrap .sec7-gallery-inner .sec7-gallery-item').find('img').removeClass('active');
});


// sec8
var dataShow = 0;

$(".plus-btn .sec-btn").on("click", function () {
  if (dataShow == 0) {
    $(".sec8-item-box").eq(1).addClass("active");
    $(".plus-btn .sec-btn").removeClass("active");
    dataShow++;
  } else if (dataShow == 1) {
    $(".sec8-item-box").eq(2).addClass("active");
    $(".plus-btn .sec-btn").addClass("active");
    dataShow++;
  } else if (dataShow == 2) {
    $(".sec8-item-box").eq(1).removeClass("active");
    $(".sec8-item-box").eq(2).removeClass("active");
    // $(".plus-btn .sec-btn").removeClass("active");
    dataShow = 0;
  }
});



// footer
 $('.footer-two.mobile .footer-two-wrap .main-wrap > a').click(function(){
  $(this).siblings().slideToggle('active');
  $(this).children().toggleClass('active');
 });


$('.footer-four .footer-language li').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});





}); //end

